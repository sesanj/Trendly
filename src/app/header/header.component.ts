import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../product service/product-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  service = inject(ProductServiceService);

  ngOnInit() {
    // this.cartFavourites = this.service.getFavourite().length;
  }

  get favourites() {
    return this.service.favourites.length;
  }

  get cartTotal() {
    return this.service.cart.length;
  }

  get cartPrice() {
    let price = 0;
    for (let item of this.service.cart) {
      price += item.discount ? item.discount : item.price;
    }

    return price;
  }
}
