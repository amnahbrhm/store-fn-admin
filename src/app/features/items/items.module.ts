import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: ItemAddComponent
  }
];

@NgModule({
  declarations: [
    ItemListComponent,
    ItemAddComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemsModule { }
