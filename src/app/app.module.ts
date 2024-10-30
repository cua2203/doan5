import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Select2Directive } from './directives/select2.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { CategoryComponent } from './admin/category/category.component';
import { BrandComponent } from './admin/brand/brand.component';
import { ProductComponent } from './admin/product/product.component';
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

import { OrderComponent } from './admin/order/order.component';
import { OrderDetailComponent } from './admin/order/orderDetail';

import { ImportBillComponent } from './admin/import-bill/import-bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './admin/bar-chart/bar-chart.component';
import { WarehouseComponent } from './admin/warehouse/warehouse.component';
import { SupplierComponent } from './admin/supplier/supplier.component';
import { UserComponent } from './admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

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

    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ManageImageComponent,

    OrderComponent,

    ImportBillComponent,
    Select2Directive,
    BarChartComponent,
    WarehouseComponent,
    SupplierComponent,
    UserComponent,
    


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgChartsModule    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
