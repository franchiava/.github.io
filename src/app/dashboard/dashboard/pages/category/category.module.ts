import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
  ]
})
export class CategoryModule { }
