import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductServiceService } from '../../product service/product-service.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  service = inject(ProductServiceService);

  @Output() cartClosed = new EventEmitter<boolean>();

  @Input({ required: true }) cartActive: boolean = false;
  //  cartTotal: number = 0;

  // cart: Product[] = [];

  get cart() {
    return this.service.cart;
  }

  closeCart() {
    this.cartClosed.emit(false);
  }

  get cartTotal() {
    let price = 0;
    for (let item of this.service.cart) {
      price += item.discount ? item.discount : item.price;
    }
    return price;
  }

  deleteProduct(product: Product) {
    const index = this.service.cart.indexOf(product);
    this.service.cart.splice(index, 1);
  }

  getPrice(product: Product) {
    return product.discount ? product.discount : product.price;
  }
}
