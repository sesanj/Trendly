import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductData } from '../../data/allProducts';
import { provideRouter } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  allProducts: Product[] = ProductData;

  clickedProduct!: Product;

  modifiedCart: { product: Product; count: number }[] = [];

  favourites: Product[] = [];

  constructor() {
    if (this.getCartFromLocalStorage()) {
      for (let item of this.getCartFromLocalStorage()) {
        this.modifiedCart.push(item);
      }
    }
  }

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
    if (this.modifiedCart.some((item) => item.product.id == product.id)) {
      let index = this.modifiedCart.findIndex(
        (item) => item.product.id == product.id
      );

      this.modifiedCart[index].count += 1;
    } else {
      this.modifiedCart.push({ product: product, count: 1 });
    }

    this.addCartToLocalStorage();
  }

  getCart() {
    return this.modifiedCart;
  }

  addToFavourite(product: Product) {
    this.favourites.push(product);
  }

  getFavourite() {
    return this.favourites;
  }

  getCartFromLocalStorage() {
    let value = localStorage.getItem('cart');

    return value ? JSON.parse(value) : null;
  }

  addCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.modifiedCart));
  }
}
