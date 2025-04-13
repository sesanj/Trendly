import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartProduct } from '../../models/product-order.model';
import { NotificationService } from '../../services/notification-service.service';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  productService = inject(ProductServiceService);
  notification = inject(NotificationService);

  @Output() cartClosed = new EventEmitter<boolean>();

  @Input({ required: true }) cartActive: boolean = false;

  get cart() {
    return this.productService.cart;
  }

  closeCart() {
    this.cartClosed.emit(false);
  }

  get cartTotal() {
    let price = 0;
    for (let item of this.productService.cart) {
      price += item.totalPrice * item.quantity;
    }
    return price;
  }

  deleteProduct(product: CartProduct, productIndex: number) {
    this.productService.deleteFromCart(productIndex);

    this.notification.notify(
      'products/' + this.productImage(product.ID) || '',
      'This item was Removed from your Cart'
    );
  }

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);
    return product[0].image?.image1;
  }

  getPrice(cartItem: CartProduct) {
    return cartItem.totalPrice * cartItem.quantity;
  }
}
