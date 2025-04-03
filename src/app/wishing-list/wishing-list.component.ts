import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../models/product.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-wishing-list',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CurrencyPipe,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './wishing-list.component.html',
  styleUrl: './wishing-list.component.css',
})
export class WishingListComponent {
  productService = inject(ProductServiceService);
  notification = inject(NotificationService);

  favouriteProducts = this.productService.getFavourite();

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }

  getPrice(product: Product) {
    return product.discount ? product.discount : product.price;
  }

  remove(product: Product) {
    this.productService.removeFromFavourite(product);

    this.notification.notify(
      'products/' + this.productImage(product.id) || '',
      'This item was Removed from your Cart'
    );
  }
}
