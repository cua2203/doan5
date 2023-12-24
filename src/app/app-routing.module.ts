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

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
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
      { path: 'product', component: ProductComponent },
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
