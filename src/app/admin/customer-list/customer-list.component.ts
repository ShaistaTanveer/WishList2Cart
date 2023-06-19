import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: any;
  constructor(public authService: MyServiceService) {}

  ngOnInit(): void {
    this.authService.getCustomer().subscribe(
      (response: any) => {
        console.log(response.customerList);
        this.customerList = response.customerList;
        return { customerList: response.customerList };
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
