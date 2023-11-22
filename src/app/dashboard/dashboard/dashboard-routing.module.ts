import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./pages/user/user.component";
import { ProductComponent } from "./pages/product/product.component";
import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { autGuardGuard } from "src/app/core/guard/aut-guard.guard";


const routes: Routes = [
     {
         path: 'home',
         component: HomeComponent,
         canActivate:[autGuardGuard],
         loadChildren: () => import ('./pages/home/home.module').then((m) => m.HomeModule)
     },
     {
         path: 'user',
         component: UserComponent,
         loadChildren: () => import ('./pages/user/user.module').then((m) => m.UserModule)
     },
     {
         path: 'product',
         component: ProductComponent,
         loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule)
     },
     {
         path: 'category',
         component: CategoryComponent,
         loadChildren: () => import('./pages/category/category.module').then((m) => m.CategoryModule)
     },
     {
         path: '**',
         redirectTo: '/dashboard/home'
     },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }