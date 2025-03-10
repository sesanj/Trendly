import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { WishingListComponent } from './wishing-list/wishing-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:filter', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishingListComponent },
  { path: 'myAccount', component: AdminDashboardComponent },
  { path: 'myAccount/:nav', component: AdminDashboardComponent },
];
