import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductServiceService } from '../services/product-service.service';
import { CurrencyPipe } from '@angular/common';
import { CartProduct } from '../models/product-order.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productService = inject(ProductServiceService);

  cartItems = this.productService.getCart();
  quantity: number = 1;

  shippingFee = 0;
  freeShippingStandard = 150;
  theShippingMethod = 'local';

  getImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }

  getCartTotal() {
    let cartTotal = 0;

    this.productService
      .getCart()
      .forEach((item) => (cartTotal += item.totalPrice * item.quantity));
    return cartTotal;
  }

  getColor(color?: string) {
    return color == '' ? 'Nill' : color;
  }

  getSize(size?: string) {
    return size == '' ? 'Nill' : size;
  }

  getQuantity(item: CartProduct) {
    this.quantity = item.quantity;

    return this.quantity;
  }

  deleteProduct(product: CartProduct) {
    this.productService.deleteFromCart(product);
  }

  clearCart() {
    this.productService.clearCart();
  }

  increase(item: CartProduct) {
    item.quantity = item.quantity + 1;

    this.productService.addCartToLocalStorage();
  }

  decrease(item: CartProduct) {
    if (item.quantity == 1) {
      return;
    }

    item.quantity = item.quantity - 1;
    this.productService.addCartToLocalStorage();
  }

  checkProgressBar() {
    if (this.getCartTotal() > this.freeShippingStandard) {
      return this.freeShippingStandard;
    } else {
      return this.getCartTotal();
    }
  }

  freeshippingActive() {
    if (this.getCartTotal() > this.freeShippingStandard) {
      return true;
    } else {
      return false;
    }
  }

  totalPrice() {
    return this.getCartTotal() + this.shippingFee;
  }

  thePriceToFreeShipping() {
    let price = 0;
    if (this.getCartTotal() < this.freeShippingStandard) {
      price = this.freeShippingStandard - this.getCartTotal();
    }

    return price;
  }

  shippingMethod(way: string) {
    this.theShippingMethod = way;
    if (way == 'local' || way == 'free') {
      this.shippingFee = 0.0;
    } else {
      this.shippingFee = 15.0;
    }
  }
}
