import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './models/product.model';
import { allProducts } from '../../data/allProducts';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product: Product[] = allProducts;

  favoriteProducts: Product[] = [];

  discount: string = '30%';

  calculateDiscount(price: number, discount: number): string {
    let percent: number = (discount / price) * 100;

    const off: number = Math.floor(100 - percent);

    return off + '%';
  }

  addToCart() {
    console.log('Product Added To Cart!');
  }

  favoriteClicked(product: Product) {
    this.favoriteProducts.push(product);
  }

  unFavorite(product: Product) {
    this.favoriteProducts.splice(this.favoriteProducts.indexOf(product), 1);
  }
}
