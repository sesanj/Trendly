import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { ProductServiceService } from './product service/product-service.service';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { SalesProductsComponent } from './sales-products/sales-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FeaturesComponent,
    FeaturedProductsComponent,
    SalesProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productService = inject(ProductServiceService);
}
