import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./pages/user/user.component";
import { ProductComponent } from "./pages/product/product.component";
import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'product',
        component: ProductComponent
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