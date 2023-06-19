import { Component, Input, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { MyServiceService } from '../my-service.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartcount: any;
  constructor(private service: MyServiceService) {
    service.headerClicked.subscribe((count: ProductsComponent) => {
      this.cartcount = count;
    });
    service.Clicked.subscribe((Cartcount: CartComponent) => {
      this.cartcount = Cartcount;
    });
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    console.log('called get cart');
    this.service.getCartItems().subscribe(
      (data) => {
        this.cartcount = data.count;
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
