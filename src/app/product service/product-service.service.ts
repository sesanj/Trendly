import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductData } from '../../data/allProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  allProducts: Product[] = ProductData;

  clickedProduct!: Product;

  cart: Product[] = [];

  favourites: Product[] = [];

  constructor() {}

  getAllProducts() {
    return this.allProducts;
  }

  selectedProduct(id: String) {
    for (let products of this.allProducts) {
      if (products.id === id) {
        this.clickedProduct = products;
      }
    }

    return this.clickedProduct;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  addToFavourite(product: Product) {
    this.favourites.push(product);
  }

  getFavourite() {
    return this.favourites;
  }
}
