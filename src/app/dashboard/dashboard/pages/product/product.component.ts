import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public displayedColumns = ['id','name','price','category','detail','place','actions'];
  public dataSource: Product[] = [];
  public data$: Observable<Product[]>;
  MatDialog: any;


  constructor(private ProductService: ProductService, 
    private matDialog: MatDialog
    ) {
    this.data$ = this.ProductService.getProduct()
  }

onCreateProduct(): void {
  const dialogRef = this.matDialog
  .open(ProductFormComponent)
  .afterClosed()
  .subscribe({
    next: (v) => {
      if(v){
        this.ProductService.createProduct(v)
      }
    }
  })
}

ngOnInit(): void {
  this.ProductService.loadProduct();
  this.ProductService
  .getProduct()
  .pipe(take(1))
  .subscribe({
    next: (data) => (data)
  });}

onDelete(id:number) :void {
  this.ProductService.deleteById(id)
}
}
