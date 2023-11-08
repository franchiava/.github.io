import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  nameControl = new FormControl <string | null> (null, Validators.required);
  priceControl = new FormControl <string | null> (null, Validators.required);
  placeControl = new FormControl <string | null> (null, Validators.required);
  detailControl = new FormControl <string | null> (null, Validators.required);
  categoryControl = new FormControl <number | null> (null, Validators.required);

  productForm = new FormGroup({
    name : this.nameControl,
    price : this.priceControl,
    place : this.placeControl,
    detail : this.detailControl,
    category : this.categoryControl,
  })

  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>,
 @Inject (MAT_DIALOG_DATA) data: any
  ){}

  onSubmit(): void {
    // if(this.productForm.invalid){
    //   this.productForm.markAllAsTouched()
    // }
    // else {
      this.dialogRef.close(this.productForm.value)
      console.log('CORREGIR')
    // }
  }
}
