import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  headerClicked = new Subject<ProductsComponent>();
  Clicked = new Subject<CartComponent>();
  constructor(private http: HttpClient, public router: Router) {}
  url = 'http://localhost:3000';

  registerManager(authData: any) {
    return this.http.post(`${this.url}/user_Register`, authData, {
      headers: this.getHeader(),
    });
  }

  editUser(authData: any) {
    return this.http.post(`${this.url}/user_Edit`, authData, {
      headers: this.getHeader(),
    });
  }

  login(authData: any) {
    return this.http.post<{ token: string; id: string; role: string }>(
      `${this.url}/login`,
      authData,
      {
        headers: this.getHeader(),
      }
    );
  }

  createProductList(data: any) {
    return this.http.post(`${this.url}/admin/add_bulkproduct`, data, {
      headers: this.getHeader(),
    });
  }

  getProductsbyAdmin() {
    console.log('service list pro');
    return this.http.get<{ productList: any }>(
      `${this.url}/admin/getproductsbyadmin`,
      {
        headers: this.getHeader(),
      }
    );
  }
  getproducts() {
    return this.http.get<{ productList: any }>(this.url + '/getallproducts');
  }

  getProductbyCategory(data: any) {
    return this.http.post<{ productList: any }>(
      `${this.url}/getproductByCategory`,
      data
    );
  }
  getProductbyPrice(data: any) {
    return this.http.post<{ productList: any }>(
      `${this.url}/getproductByPrice`,
      data
    );
  }
  addtoCart(data: any) {
    return this.http.post<{ data: any; newcart: any; count: any }>(
      `${this.url}/addtocart`,
      data,
      {
        headers: this.getHeader(),
      }
    );
  }

  getCartItems() {
    return this.http.get<{ cartItemList: any; count: any }>(
      `${this.url}/getCartItems`,
      {
        headers: this.getHeader(),
      }
    );
  }

  updateCart(productId: any, data: any) {
    return this.http.put<{ newCart: any; count: any }>(
      `${this.url}/cartUpdate/` + productId,
      data,
      {
        headers: this.getHeader(),
      }
    );
  }

  deletecartItem(productId: any) {
    return this.http.delete<{ cartItemList: any; count: any }>(
      `${this.url}/deletecartItem/` + productId,
      {
        headers: this.getHeader(),
      }
    );
  }
  deleteProductsbyAdmin(productId: any) {
    return this.http.delete(`${this.url}/admin/deleteproduct/` + productId, {
      headers: this.getHeader(),
    });
  }
  updateCartDeduct(productId: any, data: any) {
    return this.http.put<{ count: any }>(
      `${this.url}/cartUpdateDeduct/` + productId,
      data,
      {
        headers: this.getHeader(),
      }
    );
  }

  //not used
  deletecart(customerId: any) {
    return this.http.delete<{ data: any; count: any }>(
      `${this.url}/deletecart/` + customerId
    );
  }
  //
  addOrder(cart: any, customerId: string) {
    return this.http.post(`${this.url}/add_order`, cart, {
      headers: this.getHeader(),
    });
  }

  getOrders(customerId: any) {
    return this.http.get<{ orderList: any; orderDetail: any }>(
      `${this.url}/get_customer_orders/` + customerId
    );
  }
  getOrderbyAdmin() {
    return this.http.get<{ orderList: any }>(
      `${this.url}/admin/get_customer_orders_admin`,
      {
        headers: this.getHeader(),
      }
    );
  }
  getOrdersDetails(data: any) {
    return this.http.post<{ orderDetail: any }>(
      `${this.url}/get_orders_details`,
      data
    );
  }
  getUserDetails(data: any) {
    console.log(data, 'service');

    return this.http.post<{ userDetail: any }>(
      `${this.url}/get_user_details`,
      data
    );
  }

  getuserStats(data: any) {
    console.log('service');
    return this.http.post<{ data: any }>(
      `${this.url}/admin/get_userstat_details`,
      data,
      {
        headers: this.getHeader(),
      }
    );
  }
  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      token: localStorage.getItem('token') || '',
    });
    return headers;
  }
  saveAuth(token: string, id: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }
  getCustomer() {
    return this.http.get(`${this.url}/admin/get_customers`, {
      headers: this.getHeader(),
    });
  }
}
