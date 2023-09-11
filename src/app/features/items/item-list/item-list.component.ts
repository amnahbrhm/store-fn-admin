import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileSelectEvent, FileUploadEvent } from 'primeng/fileupload';
import { objectToFormData } from 'src/shared/functions/object-to-formdata';
import { ItemsService } from '../items.service';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { TableLazyLoadEvent, TablePageEvent } from 'primeng/table';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ConfirmationService]
})
export class ItemListComponent {
  addVisible: boolean = false;
  viewVisible: boolean = false;
  editVisible: boolean = false;
  items: MenuItem[] | undefined;

  products: any[] = []
  page: number = 1;
  pagination: number = 7
  selectedProduct: any;
  rowsCount: number = 0;
  showDialog(add: boolean = true, edit: boolean = false) {
    if (edit) {
      this.editVisible = true
      return
    }
    add ? (this.addVisible = true, this.form.reset) : (this.viewVisible = true);
  }
  sizes!: any[];
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null),
    price: new FormControl(null, Validators.required),
    quantity: new FormControl(null, Validators.required),
    img: new FormControl(null)
  })
  formData = new FormData();

  constructor(private confirmationService: ConfirmationService, private service: ItemsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.showDialog(false, true)
        }
      },
      {
        label: 'View',
        icon: 'pi pi-stop',
        command: () => {
          this.showDialog(false);
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.confirm();
        }
      }
    ];
  }
  submit() {
    const formData = objectToFormData(this.form.value)
    console.log(this.form.value);
    formData.forEach((element: any) => {
      console.log(element);
    });
    this.service.addProduct(formData).subscribe(data => {
      next: {
        this.loadmore()
        this.addVisible = false
      }
    })
  }
  editItem() {
    const formData = objectToFormData(this.form.value)
    console.log(this.form.value);
    formData.forEach((element: any) => {
      console.log(element);
    });
    this.service.editProduct(formData, this.selectedProduct._id).subscribe(data => {
      next: {
        this.loadmore()
        this.editVisible = false
      }
    })
  }
  loadmore(event?: TableLazyLoadEvent) {
    event && (this.page = Math.round((event.first! + 1) / this.pagination))
    this.service.getProduct({ pagination: this.pagination, page: this.page }).subscribe((data: any) => {
      this.products = (data['items'] as []);
      this.rowsCount = data['rowsCount'];
    });
  }
  confirm() {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete item ${this.selectedProduct.name} ?`,
      header: `Delete ${this.selectedProduct.name}`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteProduct(this.selectedProduct._id).subscribe((data: any) => {
          this.loadmore()
        });
      },
      reject: () => {
      }
    });
  }
  getProduct(id: string) {
    this.service.getProduct({ id }).subscribe((data: object) => {
      this.selectedProduct = data
      for (const property in this.selectedProduct) {
        this.form.controls[property] && this.form.controls[property].setValue(this.selectedProduct[property])
      }
    });
  }
  onBasicUploadAuto(event: FileSelectEvent) {
    this.form.patchValue({ img: event.files[0] })
  }
}
