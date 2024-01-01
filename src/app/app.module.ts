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
import { ProductAddComponent } from './admin/product/add_product';
import { CKEditorModule } from 'ng2-ckeditor';
import { ProductEditComponent } from './admin/product/edit_product';
import { ProductDetailComponent } from './admin/product/product-detail';
import { VariantEditComponent } from './admin/product/variant-edit';
import { DetailComponent } from './user/detail/detail.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { StoreComponent } from './user/store/store.component';
import { OrderComponent } from './admin/order/order.component';
import { OrderDetailComponent } from './admin/order/orderDetail';
import { ToastComponent } from './toast/toast.component';

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
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductComponent,
    VariantEditComponent,
    OrderDetailComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ManageImageComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    StoreComponent,
    OrderComponent,
    ToastComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
