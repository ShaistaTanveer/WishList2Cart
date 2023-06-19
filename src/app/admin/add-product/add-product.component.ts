import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  file: any;
  ngOnInit(): void {}
  constructor(private authservice: MyServiceService) {}

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = new FormData();
    data.append('profileimage', this.file);

    const productData = {
      name: form.value.name,
    };
    data.append('body', JSON.stringify(productData));
    console.log(data);

    this.authservice.createProductList(data).subscribe(
      (response) => {
        alert('added');
        console.log(response);
      },
      (error): void => {
        alert(error.error.message);
      }
    );
    form.reset({});
  }
}
