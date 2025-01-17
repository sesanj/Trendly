import { Component, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductServiceService } from '../product service/product-service.service';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-sales-products',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './sales-products.component.html',
  styleUrl: './sales-products.component.css',
})
export class SalesProductsComponent {
  productService = inject(ProductServiceService);

  filteredProducts: Product[] = [];

  activeNav!: string;
  loading: boolean = false;

  ngOnInit() {
    this.filteredProducts = this.productService
      .getAllProducts()
      .filter((product) => product.category.men);
  }

  getFeaturedMen() {
    this.loading = true;

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.men);
      this.loading = false;
    }, 600);
    this.activeNav = 'Men';
  }

  getFeaturedWomen() {
    this.loading = true;

    setTimeout(() => {
      this.activeNav = 'Women';
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.women);

      this.loading = false;
    }, 600);
  }

  getFeaturedTrending() {
    this.loading = true;

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.tag === 'TRENDING');
      this.loading = false;
    }, 600);
    this.activeNav = 'Trending';
  }
}
