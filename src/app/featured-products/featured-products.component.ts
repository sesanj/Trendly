import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductServiceService } from '../product service/product-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent implements OnInit {
  productService = inject(ProductServiceService);

  allProducts: Product[] = this.productService.getAllProducts();

  navStyle: string = '';
  loading: boolean = false;

  ngOnInit() {
    this.allProducts = this.productService.getAllProducts();
    this.getFeaturedMen();
  }

  getFeaturedMen() {
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    //   return this.allProducts.filter((product) => product.category.men);
    // }, 0);
    this.navStyle = 'Men';

    this.allProducts = this.productService
      .getAllProducts()
      .filter((product) => product.category.men);
  }

  getFeaturedWomen() {
    this.loading = true;
    this.navStyle = 'Women';

    setTimeout(() => {
      this.loading = false;
      this.allProducts = this.productService
        .getAllProducts()
        .filter((product) => product.category.women);
    }, 500);
  }

  getFeaturedTrending() {
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    //   return this.allProducts.filter((product) => product.tag === 'TRENDING');
    // }, 0);
    this.navStyle = 'Trending';
    this.allProducts = this.productService
      .getAllProducts()
      .filter((product) => product.tag === 'TRENDING');
  }
}