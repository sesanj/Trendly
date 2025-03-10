import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { CartProduct } from '../models/product-order.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productService = inject(ProductServiceService);
  @Input({ required: true }) product!: Product;

  favoriteProducts: Product[] = this.productService.getFavourite();

  calculateDiscount(price: number, discount: number): string {
    let percent: number = (discount / price) * 100;

    const off: number = Math.floor(100 - percent);

    return off + '%';
  }

  ngOnInit() {}

  addToCart(product: Product) {
    let cartProduct: CartProduct = {
      ID: product.id,
      productName: product.title,
      quantity: 1,
      totalPrice: product.discount ? product.discount : product.price,
      color: '',
      size: '',
    };

    this.productService.addToCart(cartProduct);
  }

  favoriteClicked(product: Product) {
    this.productService.addToFavourite(product);
  }

  unFavorite(product: Product) {
    const index = this.productService.favourites.indexOf(product);
    this.productService.favourites.splice(index, 1);
  }
}
