import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { CartProduct } from '../models/product-order.model';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productService = inject(ProductServiceService);
  notification = inject(NotificationService);
  @Input({ required: true }) product!: Product;

  favoriteProducts!: { product: Product; date: number }[];

  calculateDiscount(price: number, discount: number): string {
    let percent: number = (discount / price) * 100;

    const off: number = Math.floor(100 - percent);

    return off + '%';
  }

  ngOnInit() {
    this.favoriteProducts = this.productService.getFavourite();
  }

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
    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Added to your Cart'
    );
  }

  favoriteClicked(product: Product) {
    this.productService.addToFavourite(product);
    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Added to your Favourite Products'
    );
  }

  unFavorite(product: Product) {
    this.productService.removeFromFavourite(product);
    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Removed from your Favourite Products'
    );
  }

  getFavouriteStatus(productID: string) {
    let favourite = this.favoriteProducts.some(
      (product) => product.product.id == productID
    );

    if (favourite) {
      return true;
    } else {
      return false;
    }
  }

  viewProduct(product: Product) {
    this.productService.addToViewedProduct(product);

    console.log('Added');
  }
}
