import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: MyServiceService) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = { email: form.value.email, password: form.value.password };
    this.authService.login(authData).subscribe(
      (response) => {
        const token = response.token;
        const id = response.id;
        const role = response.role;
        console.log(response.token);
        this.authService.saveAuth(token, id);
        alert('Logged In!');
        if (role == 'admin') {
          this.authService.router.navigate(['/admin']);
        } else if (role == 'staff') {
          this.authService.router.navigate(['/product']);
        }
      },
      (error): void => {
        alert(error.error.message);
      }
    );
  }
}
