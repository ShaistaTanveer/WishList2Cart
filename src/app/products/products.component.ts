import { Component, OnInit, Output } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList1: any = [];
  productName: any;
  imgurl: any;
  blob: any;
  base64Image: any;
  constructor(
    public service: MyServiceService,
    private sanitizer: DomSanitizer
  ) {}
  cart: any = [];
  data: any;
  category = '';
  price = '';
  quantity: any;
  cartcount: any;
  ngOnInit(): void {
    this.getproducts();
    this.getCart();
  }

  getCart() {
    console.log('called get cart');
    this.service.getCartItems().subscribe(
      (data) => {
        this.cart = data.cartItemList;
        this.cartcount = data.count;
        console.log(this.cart);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  getproducts() {
    this.service.getproducts().subscribe(
      (data) => {
        this.productList1 = data.productList;
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  //method with local path
  sanitize(url: any) {
    this.data = `../../assets/img/${url}`;
    return this.sanitizer.bypassSecurityTrustUrl(this.data);
  }

  //method with online pic address
  //   sanitize(url: any) {
  //     return this.sanitizer.bypassSecurityTrustUrl(
  //       url + '//' + window.location.host + 'afreen' + 'sana'
  //     );
  //   }
  // }

  addtocart(productList: any) {
    console.log(productList, 'clicked');
    this.cart.push(productList);
    let data = {
      productId: productList,
    };
    this.service.addtoCart(data).subscribe(
      (response) => {
        this.cartcount = response.count;
        console.log(response.count, 'count');
        this.service.headerClicked.next(this.cartcount);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  searchTextBar() {
    if (this.productName == '') {
      this.ngOnInit();
    } else {
      this.productList1 = this.productList1.filter((res: any) => {
        return res.productName
          .toLocaleLowerCase()
          .match(this.productName.toLocaleLowerCase());
      });
    }
  }

  onSearch(form: NgForm) {
    form.value.category = this.category;
    if (form.value.category == '') {
      this.ngOnInit();
    } else {
      this.productList1 = [];
      let data = {
        data1: this.category,
      };
      this.service.getProductbyCategory(data).subscribe(
        (response: any) => {
          this.productList1 = response.productList;
          return { productList1: response.productList };
        },
        (error) => {
          alert(error.error.message);
        }
      );
    }
  }

  onPrice(form: NgForm) {
    form.value.price = this.price;
    if (form.value.price == '') {
      this.ngOnInit();
    } else {
      this.productList1 = [];
      let data = {
        data1: this.price,
      };
      this.service.getProductbyPrice(data).subscribe(
        (response: any) => {
          this.productList1 = response.productList;
          return { productList1: response.productList };
        },
        (error) => {
          alert(error.error.message);
        }
      );
    }
  }
  //small fun
  // downloadImage(productList: any) {
  //   // console.log(productList, 'lllllllll');
  //   this.imgurl = `../../assets/img/${productList.productimage}`;
  //   console.log(this.imgurl, 'imhhhhh');
  //   let image = this.imgurl;
  //   const blob = new Blob([image], { type: 'image/jpg' });
  //   this.downLoadFile(blob, image);
  // }

  // downLoadFile(blob: any, filename: any) {
  //   console.log(filename);
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = filename;
  //   a.click();
  // }

  downloadImage(url: any) {
    let data = `../../assets/img/${url}`;
    let imageUrl = data;
    this.getBase64ImageFromURL(imageUrl).subscribe((base64data: string) => {
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // save image to disk
      var link = document.createElement('a');
      document.body.appendChild(link); // for Firefox
      link.setAttribute('href', this.base64Image);
      link.setAttribute('download', 'mrHankey.jpg');
      link.click();
    });
  }
  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D | any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
