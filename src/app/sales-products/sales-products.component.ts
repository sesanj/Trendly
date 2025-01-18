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
  isLoading: boolean = false;

  ngOnInit() {
    this.filteredProducts = this.productService
      .getAllProducts()
      .filter((product) => product.discount);
  }

  getSalesMen() {
    this.isLoading = true;

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.men);
      this.isLoading = false;
    }, 600);
    this.activeNav = 'Men';
  }

  getSalesWomen() {
    this.isLoading = true;
    this.activeNav = 'Women';

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.women);

      this.isLoading = false;
    }, 600);
  }

  getSalesShoes() {
    this.isLoading = true;

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.shoe);
      this.isLoading = false;
    }, 600);
    this.activeNav = 'Shoe';
  }

  getSalesBags() {
    this.isLoading = true;

    setTimeout(() => {
      this.filteredProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.bag);
      this.isLoading = false;
    }, 600);
    this.activeNav = 'Bag';
  }
}
