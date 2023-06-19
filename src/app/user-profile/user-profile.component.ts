import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  customerId: any;
  profile: any;
  username: any;
  userDetails: any;
  profileimage: any;
  constructor(public service: MyServiceService, router: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id');
    console.log(this.customerId);
    this.getuserDetails();
  }
  getuserDetails() {
    let data = {
      customerId: this.customerId,
    };
    this.service.getUserDetails(data).subscribe(
      (data) => {
        console.log(data);
        this.userDetails = data.userDetail;
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
  edit(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    let data = new FormData();
    data.append('profileimage', this.profileimage);
    const authData = {
      firstName: form.value.firstName,
      contact: form.value.contact,
    };
    data.append('body', JSON.stringify(authData));
    this.service.editUser(data).subscribe(
      (response) => {
        alert('edited');
        this.ngOnInit();
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profileimage = file;
    }
  }
}
