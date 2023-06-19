import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminrightsComponent } from './admin/adminrights/adminrights.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  {
    path: 'SignUp',
    component: SignUpComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'myProfile/myorders',
    component: OrdersComponent,
  },
  {
    path: 'myProfile/mydetails',
    component: UserProfileComponent,
  },
  {
    path: 'dashBoard',
    component: DashboardComponent,
  },

  // {
  //   path: 'myorders',
  //   component: OrdersComponent,
  // },
  {
    path: 'myProfile',
    component: MyProfileComponent,
  },
  {
    path: 'admin',
    component: AdminrightsComponent,
    children: [
      {
        path: 'addProducts',
        component: AddProductComponent,
      },
      {
        path: 'viewOrders',
        component: OrderListComponent,
      },
      {
        path: 'listCustomer',
        component: CustomerListComponent,
      },
      {
        path: 'listProduct',
        component: ListProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
