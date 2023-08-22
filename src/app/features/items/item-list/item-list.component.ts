import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileSelectEvent, FileUploadEvent } from 'primeng/fileupload';
import { objectToFormData } from 'src/shared/functions/object-to-formdata';
import { ItemsService } from '../items.service';
import { ConfirmationService } from 'primeng/api';
import { TablePageEvent } from 'primeng/table';
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
  products: any[] = []
  page: number = 1;
  selectedProduct: any;
  hasNextPage: any;
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
    this.service.getProduct({ pagination: 2, page: 1 }).subscribe((data: any) => {
      this.products = data['items'] as [];
      this.hasNextPage = data['hasNextPage'];
    });
  }
  submit() {
    const formData = objectToFormData(this.form.value)
    console.log(this.form.value);
    formData.forEach((element: any) => {
      console.log(element);
    });
    this.service.addProduct(formData).subscribe(data => {
      next: {
        console.log(data);
      }
    })
  }
  editItem(){
    const formData = objectToFormData(this.form.value)
    console.log(this.form.value);
    formData.forEach((element: any) => {
      console.log(element);
    });
    this.service.editProduct(formData, this.selectedProduct._id).subscribe(data => {
      next: {
        console.log(data);
      }
    })
  }
  loadmore(event: TablePageEvent) {
    console.log(event);
    
    // event.rows
    this.page = event.first/2
    this.service.getProduct({ pagination: 2, page: this.page }).subscribe((data: any) => {
      this.products = this.products.concat(data['items'] as []);
      this.hasNextPage = data['hasNextPage'];
      console.log(this.products);
    });
  }
  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.service.deleteProduct(this.selectedProduct._id).subscribe((data: any) => {
           
            console.log(this.products);
          });
            // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: () => {
            // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
  getProduct(id: string) {
    this.service.getProduct({ id }).subscribe((data: object) => {
      this.selectedProduct = data
      for (const property in this.selectedProduct) {
        this.form.controls[property] ? 
        this.form.controls[property].setValue(this.selectedProduct[property])
        : ''
        console.log(`${property}: ${this.selectedProduct[property]}`);
      }
      // this.selectedProduct.map((element: any)=> {        
      //   // this.form.controls[element]
      // })
      // this.showDialog(false)
    });
  }
  onBasicUploadAuto(event: FileSelectEvent) {
    this.form.patchValue({ img: event.files[0] })
    // this.form.controls['img'].updateValueAndValidity()
    // const file: File = event.files[0];
    // if (file) {
    //   const fileName = file.name;
    //   const formData = new FormData()
    //   formData.append("img", file, fileName);
    //   formData.forEach((element: any) => {
    //     console.log(element);
    //   });
    //   // console.log(formData.getAll());
    // }
  }
}
