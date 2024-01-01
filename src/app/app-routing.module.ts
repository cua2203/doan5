import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { UserLayoutComponent } from './user/layout/layout.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/category/add_category';
import { EditCategoryComponent } from './admin/category/edit_category';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './admin/product/product.component';
import { BrandComponent } from './admin/brand/brand.component';
import { AddbrandComponent } from './admin/brand/add_brand';
import { EditbrandComponent } from './admin/brand/edit_brand';
import { ProductAddComponent } from './admin/product/add_product';
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

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },

  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'detail/:id', component: DetailComponent },
      {path:'checkout',component: CheckoutComponent},
      {path:'cart',component:CartComponent},
      {path:'profile',component:ProfileComponent},
      {path:'store',component:StoreComponent}
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {path: 'order',children:[{path:'',component: OrderComponent},{path:'detail/:id',component:OrderDetailComponent}]},
      {
        path: 'product',
        children: [
          { path: '', component: ProductComponent },
          { path: 'add', component: ProductAddComponent },
          { path: 'edit/:id', component: ProductEditComponent },
          { path: 'detail/:id', component: ProductDetailComponent },
          {
            path: 'var_edit/:id',
            component: VariantEditComponent,
          },
        ],
      },
      {
        path: 'brand',
        children: [
          { path: '', component: BrandComponent },
          { path: 'add', component: AddbrandComponent },
          { path: 'edit/:id', component: EditbrandComponent },
        ],
      },

      {
        path: 'category',
        children: [
          {
            path: '',
            component: CategoryComponent,
          },
          {
            path: 'add',
            component: AddCategoryComponent,
          },
          {
            path: 'edit/:id',
            component: EditCategoryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
