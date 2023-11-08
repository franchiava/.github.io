import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SideNavComponent } from '../design/side-nav/side-nav.component';
import { ToolbarComponent } from '../design/toolbar/toolbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductModule } from './pages/product/product.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { CategoryModule } from './pages/category/category.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    ToolbarComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DashboardRoutingModule,
    ProductModule,
    UserModule,
    HomeModule,
    CategoryModule,
    ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
