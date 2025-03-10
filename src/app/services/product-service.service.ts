import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductData } from '../../data/allProducts';
import { CartProduct } from '../models/product-order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  allProducts: Product[] = ProductData;

  clickedProduct!: Product;

  cart: CartProduct[] = [];

  favourites: Product[] = [];

  constructor() {
    if (this.getCartFromLocalStorage()) {
      for (let item of this.getCartFromLocalStorage()) {
        this.cart.push(item);
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

  addToCart(product: CartProduct) {
    if (this.cart.some((item) => item.ID == product.ID)) {
      let index = this.cart.findIndex((item) => item.ID == product.ID);

      this.cart[index].quantity += product.quantity;
      // this.cart[index].totalPrice =
      //   this.cart[index].totalPrice * this.cart[index].quantity;
    } else {
      this.cart.push(product);
    }

    this.addCartToLocalStorage();
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

  getCartFromLocalStorage() {
    let value = localStorage.getItem('cart');

    return value ? JSON.parse(value) : null;
  }

  addCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
