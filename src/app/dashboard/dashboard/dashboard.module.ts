import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductModule } from './pages/product/product.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { CategoryModule } from './pages/category/category.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    ProductModule,
    UserModule,
    HomeModule,
    CategoryModule,
    SharedModule,
    ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
