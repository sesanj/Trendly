import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:filter', component: ShopComponent },
  // { path: 'shop/:women', component: ShopComponent },
  // { path: 'shop/:deals', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:productId', component: ProductPageComponent },
];
