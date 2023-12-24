import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { UserLayoutComponent } from './user/layout/layout.component';
import { CategoryComponent } from './admin/category/category.component';
import { BrandComponent } from './admin/brand/brand.component';
import { ProductComponent } from './admin/product/product.component';
import { HomeComponent } from './user/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './admin/category/add_category';
import { EditCategoryComponent } from './admin/category/edit_category';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddbrandComponent } from './admin/brand/add_brand';
import { ManageImageComponent } from './admin/manage-image/manage-image.component';
import { EditbrandComponent } from './admin/brand/edit_brand';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UserLayoutComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BrandComponent,
    AddbrandComponent,
    EditbrandComponent,
    ProductComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ManageImageComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
