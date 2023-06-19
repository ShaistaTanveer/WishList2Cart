import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  productList: any;
  constructor(public authService: MyServiceService) {}

  ngOnInit(): void {
    console.log('list com ng oninit run');

    this.getList();
  }

  getList() {
    console.log('called funct');

    this.authService.getProductsbyAdmin().subscribe(
      (response: any) => {
        console.log(response);
        this.productList = response.productList;
        return { productList: response.productList };
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }

  deleteProduct(product: any) {
    console.log(product, 'called funct');

    this.authService.deleteProductsbyAdmin(product).subscribe(
      (response: any) => {
        console.log(response);
        alert('deleted');
        this.getList();
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
