import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Components/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { ProductsComponent } from './Components/products/products.component';
import { CreateCategoryComponent } from './Components/category/create-category/create-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'Sidebar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TopbarModule } from 'Topbar';
import { ShopComponent } from './Components/shop/shop.component';
import { TopBarComponent } from './Components/shop/top-bar/top-bar.component';
import { ProductListComponent } from './Components/shop/product-list/product-list.component';
import { FiltersComponent } from './Components/shop/filters/filters.component';
import { SecondTopBarComponent } from './Components/shop/second-top-bar/second-top-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    LoginComponent,
    StocksComponent,
    ProductsComponent,
    CreateCategoryComponent,
    DashboardComponent,
    ShopComponent,
    TopBarComponent,
    ProductListComponent,
    FiltersComponent,
    SecondTopBarComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatFormFieldModule,
    SidebarModule,
    TopbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
