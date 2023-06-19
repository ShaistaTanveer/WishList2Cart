import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  grandtotal: any;
  cart: any = [];
  customerId: any;
  cartList: any;
  total: any = [];
  cartcount: any;
  constructor(public service: MyServiceService, router: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id');
    console.log(this.customerId);
    this.getCart();
  }

  getCart() {
    console.log('called get cart', this.customerId);
    this.service.getCartItems().subscribe(
      (data) => {
        this.cart = data.cartItemList;
        console.log(this.cart);
        this.total = [];
        this.cart.forEach((e: any) => {
          this.total.push(e.price);
          console.log(this.total);
          this.grandtotal = this.total.reduce((a: any, b: any) => a + b, 0);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkout() {
    let order = {
      items: this.cart,
      bill: this.grandtotal,
    };
    this.service.addOrder(order, this.customerId).subscribe(
      (data) => {
        alert('order placed');
        this.service.router.navigate(['/myProfile/myorders']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete(productList: any) {
    console.log(productList, 'delete');
    this.cart.map((a: any, index: any) => {
      if (productList.productId === a.productId) {
        this.cart.splice(index, 1);
        this.service.deletecartItem(a.productId).subscribe(
          (data) => {
            this.cartcount = data.count;
            this.service.Clicked.next(this.cartcount);
            this.getCart();
          },
          (error) => {
            alert(error.error.message);
          }
        );
      }
    });
  }

  deleteCart() {
    this.service.deletecart(this.customerId).subscribe(
      (data) => {
        this.getCart();
        alert('cart deleted');
        this.total = [];
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  emptyCart() {
    this.deleteCart();
  }

  onQtyIncreace(productList: any) {
    let data = {
      customerId: this.customerId,
    };
    console.log(productList.productId);
    this.service.updateCart(productList.productId, data).subscribe(
      (data) => {
        this.cartcount = data.count;
        this.service.Clicked.next(this.cartcount);
        this.getCart();
        // this.service.router.navigate(['/product']);
        console.log('seleted');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onQtydeduct(productList: any) {
    console.log('deduct');
    let data = {
      customerId: this.customerId,
    };
    console.log(productList.productId);
    this.service.updateCartDeduct(productList.productId, data).subscribe(
      (data) => {
        this.cartcount = data.count;
        this.service.Clicked.next(this.cartcount);
        this.getCart();
        // this.service.router.navigate(['/product']);
        console.log('seleted');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
