import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SaleProductComponent } from './sale-product/sale-product.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminrightsComponent } from './admin/adminrights/adminrights.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DropdownModule } from 'primeng/dropdown';
import { SafeUrlPipe } from './safe-url.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SaleProductComponent,
    AboutInfoComponent,
    ProductsComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    AdminrightsComponent,
    AddProductComponent,
    CartComponent,
    MyProfileComponent,
    OrdersComponent,
    UserProfileComponent,
    OrderListComponent,
    CustomerListComponent,
    ListProductComponent,
    DashboardComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ChartjsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
