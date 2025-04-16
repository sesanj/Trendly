import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css',
})
export class CategorySectionComponent {
  productService = inject(ProductServiceService);

  totalWomen() {
    return this.productService
      .getAllProducts()
      .filter((product) => product.category.women).length;
  }

  totalMen() {
    return this.productService
      .getAllProducts()
      .filter((product) => product.category.men).length;
  }

  totalShoes() {
    return this.productService
      .getAllProducts()
      .filter((product) => product.category.shoe).length;
  }

  totalBags() {
    return this.productService
      .getAllProducts()
      .filter((product) => product.category.bag).length;
  }
}
