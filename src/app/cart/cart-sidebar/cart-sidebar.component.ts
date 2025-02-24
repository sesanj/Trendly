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

  get cart() {
    return this.service.modifiedCart;
  }

  closeCart() {
    this.cartClosed.emit(false);
  }

  get cartTotal() {
    let price = 0;
    for (let item of this.service.modifiedCart) {
      price += item.product.discount
        ? item.product.discount * item.count
        : item.product.price * item.count;
    }
    return price;
  }

  deleteProduct(product: Product) {
    const index = this.service.modifiedCart.findIndex(
      (item) => item.product.id == product.id
    );
    this.service.modifiedCart.splice(index, 1);

    this.service.addCartToLocalStorage();
  }

  getPrice(cartItem: { product: Product; count: number }) {
    return cartItem.product.discount
      ? cartItem.product.discount * cartItem.count
      : cartItem.product.price * cartItem.count;
  }
}
