import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {CheckoutComponent} from "./checkout/checkout.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:filter', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'checkout', component: CheckoutComponent },

];
