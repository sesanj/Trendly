import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { CurrencyPipe } from '@angular/common';
import { CartSidebarComponent } from '../cart/cart-sidebar/cart-sidebar.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CartSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  productService = inject(ProductServiceService);
  userService = inject(UserServiceService);

  cartActive: boolean = false;

  get favourites() {
    return this.productService.favourites.length;
  }

  get cartTotal() {
    let count = 0;
    for (let item of this.productService.cart) {
      count += item.quantity;
    }
    return count;
  }

  get cartPrice() {
    let price = 0;
    for (let item of this.productService.cart) {
      price += item.totalPrice * item.quantity;
    }
    return price;
  }

  viewCart() {
    this.cartActive = true;
  }

  closeCart(event: boolean) {
    this.cartActive = event;
  }

  get user() {
    return this.userService.getUser();
  }

  logout() {
    this.userService.logOut();
  }
}
