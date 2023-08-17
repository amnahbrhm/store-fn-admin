import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadEvent } from 'primeng/fileupload';
import { objectToFormData } from 'src/shared/functions/object-to-formdata';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  // products!: Product[];
  visible: boolean = false;

  showDialog() {
    this.visible = true;
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
  selectedSize: any = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.productService.getProductsMini().then((data) => {
    //     this.products = data;
    // });
    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' }
    ];
  }
  submit() {
    const formData = objectToFormData(this.form.value)
    console.log(this.form.value);
    formData.forEach((element: any) => {
      console.log(element);
    });


  }
  onBasicUploadAuto(event: any) {
    console.log('hey');
    
    // this.form.patchValue({ img: event.files[0] })
    // console.log(this.form);
    
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
