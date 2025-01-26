import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  favoriteProducts: String[] = [];

  calculateDiscount(price: number, discount: number): string {
    let percent: number = (discount / price) * 100;

    const off: number = Math.floor(100 - percent);

    return off + '%';
  }

  ngOnInit() {
    // this.favoriteProducts.push('One');
    // this.favoriteProducts.push('Two');
    // this.favoriteProducts.push('Three');
    // this.favoriteProducts.push('Four');
  }

  addToCart() {
    console.log('Product Added To Cart!');
  }

  favoriteClicked(product: Product) {
    this.favoriteProducts.push(product.id);
    console.log(this.favoriteProducts);
  }

  unFavorite(product: Product) {
    this.favoriteProducts.splice(this.favoriteProducts.indexOf(product.id), 1);
    console.log(this.favoriteProducts);
  }
}
