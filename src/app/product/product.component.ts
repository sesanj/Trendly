import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../product service/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  service = inject(ProductServiceService);
  @Input({ required: true }) product!: Product;

  favoriteProducts: Product[] = this.service.getFavourite();

  calculateDiscount(price: number, discount: number): string {
    let percent: number = (discount / price) * 100;

    const off: number = Math.floor(100 - percent);

    return off + '%';
  }

  ngOnInit() {}

  addToCart(product: Product) {
    this.service.addToCart(product);
  }

  favoriteClicked(product: Product) {
    this.service.addToFavourite(product);
  }

  unFavorite(product: Product) {
    const index = this.service.favourites.indexOf(product);
    this.service.favourites.splice(index, 1);
  }
}
