import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  pageCount: any;
  productsPerPage: number = 2;
  customerName: any;
  public selectedPage = 1;
  data = 'null';
  constructor(public authService: MyServiceService) {}
  orderList: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.authService.getOrderbyAdmin().subscribe((response: any) => {
      console.log(response.orderList);

      this.orderList = response.orderList;
      // this.pageCount = response.count;
      return { orderList: response.orderList };
    });
  }
  onDelete(oid: string) {
    // this.authService.deleteOrder(oid).subscribe(() => {
    //   alert('deleted');
    //   this.fetchData();
    // });
  }
  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumber(): number[] {
    return Array(Math.ceil(this.pageCount / this.productsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.fetchData();
  }

  searchTextBar() {
    if (this.customerName == '') {
      this.ngOnInit();
    } else {
      this.orderList = this.orderList.filter((res: any) => {
        return res.customerName
          .toLocaleLowerCase()
          .match(this.customerName.toLocaleLowerCase());
      });
    }
  }

  onSearch(form: NgForm) {
    this.orderList = [];
    this.data = form.value.customerName;
    // this.authService
    //   .getOrder(this.productsPerPage, this.selectedPage, this.data)
    //   .subscribe((response: any) => {
    //     this.orders = response.orderList;
    //     this.pageCount = response.count;
    //     return { orders: response.orderList };
    //   });
  }
}
