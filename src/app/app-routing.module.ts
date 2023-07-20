import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { ProductsComponent } from './Components/products/products.component';
import { CreateCategoryComponent } from './Components/category/create-category/create-category.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ShopComponent } from './Components/shop/shop.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent }, 
  { path: 'create-category', component: CreateCategoryComponent }, 
  { path: 'stocks', component: StocksComponent }, 
  { path: 'products', component: ProductsComponent }, 
  { path: 'shop', component: ShopComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
