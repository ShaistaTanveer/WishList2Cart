import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  grandtotal: any = [];
  cart: any = [];
  customerId: any;
  mynewList: any;
  myorder: any;
  total: any = [];
  array: any = [];
  showorder: any;
  showorderDetail: any;
  orderDetails: any = [];
  constructor(public service: MyServiceService, router: ActivatedRoute) {}
  button = document.querySelector('button');
  button1 = document.querySelector('button1');

  body = document.querySelector('body');
  ngOnInit(): void {
    this.customerId = localStorage.getItem('id');
    console.log(this.customerId);
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders(this.customerId).subscribe(
      (data) => {
        this.myorder = data.orderList;
        this.array = data.orderDetail;
        console.log(this.myorder, 'every new order');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete() {
    console.log('delete');
    this.service.deletecartItem(this.cart.productId).subscribe(
      (data) => {
        this.service.router.navigate(['/product']);
        console.log('seleted');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggle(button: any) {
    if (
      (document.getElementById('button') as HTMLInputElement).value == 'false'
    ) {
      let a = ((document.getElementById('button') as HTMLInputElement).value =
        'true');
      this.viewOrder(a);
    } else {
      let b = ((document.getElementById('button') as HTMLInputElement).value =
        'false');
      this.viewOrder(b);
    }
  }

  toggle2(button1: any, orderId: any) {
    console.log('clicked', orderId);

    if (
      (document.getElementById('button1') as HTMLInputElement).value == 'false'
    ) {
      let a = ((document.getElementById('button1') as HTMLInputElement).value =
        'true');
      this.viewOrderDetails(a, orderId);
    } else {
      let b = ((document.getElementById('button1') as HTMLInputElement).value =
        'false');
      this.viewOrderDetails(b, orderId);
    }
  }
  viewOrder(x: any) {
    this.showorder = x;
  }

  viewOrderDetails(x: any, orderId: any) {
    this.showorderDetail = x;
    let data = {
      myorderId: orderId,
      customerId: this.customerId,
    };
    console.log(data);

    this.service.getOrdersDetails(data).subscribe(
      (response) => {
        this.orderDetails = response.orderDetail;
        console.log(response.orderDetail, 'resss every new order');
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
