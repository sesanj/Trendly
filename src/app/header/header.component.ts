import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../product service/product-service.service';
import { CurrencyPipe } from '@angular/common';
import { CartSidebarComponent } from '../cart/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CartSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  service = inject(ProductServiceService);

  cartActive: boolean = false;

  ngOnInit() {
    // this.cartFavourites = this.service.getFavourite().length;
  }

  get favourites() {
    return this.service.favourites.length;
  }

  get cartTotal() {
    let count = 0;
    for (let item of this.service.modifiedCart) {
      count += item.count;
    }
    return count;
  }

  get cartPrice() {
    let price = 0;
    for (let item of this.service.modifiedCart) {
      price += item.product.discount
        ? item.product.discount * item.count
        : item.product.price * item.count;
    }
    return price;
  }

  viewCart() {
    this.cartActive = true;
  }

  closeCart(event: boolean) {
    this.cartActive = event;
  }
}
