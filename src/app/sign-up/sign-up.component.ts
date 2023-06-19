import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  profileimage: any;
  ngOnInit(): void {}
  constructor(
    public authService: MyServiceService,
    public route: ActivatedRoute
  ) {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profileimage = file;
    }
  }

  onSavePost(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    let data = new FormData();
    data.append('profileimage', this.profileimage);
    const authData = {
      firstName: form.value.firstName,
      email: form.value.email,
      password: form.value.password,
      gender: form.value.gender,
      contact: form.value.contact,
    };
    data.append('body', JSON.stringify(authData));
    this.authService.registerManager(data).subscribe(
      (response) => {
        alert('signedUp');
        this.authService.router.navigate(['/Login']);
      },
      (error) => {
        console.log(error);

        alert(error.error.message);
      }
    );
  }
}
