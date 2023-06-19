import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.Scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: MyServiceService) {}
  filters: any = {
    selectedDates: '30,0,date',
  };
  graph: any;
  startDate: any;
  endDate: any;
  resdata: any;
  xasisval: any;
  totalUsers: any;
  groupDates = [
    {
      label: 'Day',
      value: 'day',
      items: [
        { label: 'Today', value: '0,0,date,Today' },
        { label: 'Yesterday', value: '1,1,date,Yesterday' },
      ],
    },
    {
      label: 'Week',
      value: 'week',
      items: [
        { label: 'This Week', value: '0,0,week,This Week' },
        { label: 'Last Week', value: '1,1,week,Last Week' },
      ],
    },
    {
      label: 'Month',
      value: 'month',
      items: [
        { label: 'This Month', value: '0,0,month,This Month' },
        { label: 'Last Month', value: '1,1,month,Last Month' },
        { label: 'Last Three Month', value: '3,1,month,Last Three Month' },
      ],
    },
    {
      label: 'Year',
      value: 'year',
      items: [
        { label: 'This Year', value: '0,0,year,This Year' },
        { label: 'Last Year', value: '1,1,year,Last Year' },
      ],
    },
  ];
  ngOnInit(): void {}
  Fetchdetails() {
    let fromDate, toDate;
    let startRange = this.filters.selectedDates.split(',')[0];
    let labVal = this.filters.selectedDates.split(',')[3];
    let endRange = this.filters.selectedDates.split(',')[1];
    if (this.filters.selectedDates.includes('date')) {
      fromDate = new Date(
        moment().subtract(startRange, 'days').startOf('days').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'days').endOf('days').format()
      );
    } else if (this.filters.selectedDates.includes('week')) {
      fromDate = new Date(
        moment().subtract(startRange, 'week').startOf('week').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'week').endOf('week').format()
      );
    } else if (this.filters.selectedDates.includes('month')) {
      fromDate = new Date(
        moment().subtract(startRange, 'month').startOf('month').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'month').endOf('month').format()
      );
    } else if (this.filters.selectedDates.includes('year')) {
      fromDate = new Date(
        moment().subtract(startRange, 'year').startOf('year').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'year').endOf('year').format()
      );

      this.xasisval = labVal;
    }
    this.xasisval = labVal;
    console.log(this.xasisval, 'llllll');

    let data = {
      fromDate: fromDate,
      toDate: toDate,
    };
    this.authService.getuserStats(data).subscribe((response: any) => {
      this.resdata = response.data.growth;
      console.log(this.resdata);
      this.totalUsers = response.data.totalUser;
      this.graph = {
        labels: ['totalUsers', this.xasisval],
        datasets: [
          {
            label: this.xasisval + ' ' + 'growth',
            backgroundColor: ['red', 'voilet'],
            data: [this.totalUsers, this.resdata],
          },
        ],
      };
    });
  }
}
