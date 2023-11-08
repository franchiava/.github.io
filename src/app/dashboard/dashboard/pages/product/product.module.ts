import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductModule { }
