import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopComponent } from './shop/shop.component';
import { RouterOutlet } from '@angular/router';
=======
import {RegisterComponent} from "./register/register.component";
>>>>>>> Register

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    ShopComponent,
    RouterOutlet,
  ],
=======
  imports: [HomeComponent, RegisterComponent],
>>>>>>> Register
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
