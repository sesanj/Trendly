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

  favourites: { product: Product; date: number }[] = [];

  viewedProduct: Product[] = [];

  constructor() {
    // console.log('Product Service');

    if (this.getCartFromLocalStorage()) {
      for (let item of this.getCartFromLocalStorage()) {
        this.cart.push(item);
      }
    }

    if (this.getFavouriteFromLocalStorage()) {
      for (let item of this.getFavouriteFromLocalStorage()) {
        this.favourites.push(item);
      }
    }

    if (this.getViewedProductFromLocalStorage()) {
      for (let item of this.getViewedProductFromLocalStorage()) {
        this.viewedProduct.push(item);
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
    if (
      this.cart.some(
        (item) =>
          item.ID == product.ID &&
          item.color == product.color &&
          item.size == product.size
      )
    ) {
      let index = this.cart.findIndex((item) => item.ID == product.ID);

      this.cart[index].quantity += product.quantity;
    } else {
      this.cart.push(product);
    }

    this.addCartToLocalStorage();
  }

  deleteFromCart(productIndex: number) {
    // const index = this.cart.findIndex((item) => item.ID == product.ID);

    this.cart.splice(productIndex, 1);

    this.addCartToLocalStorage();
  }

  clearCart() {
    this.cart.length = 0;

    this.addCartToLocalStorage();
  }

  getCart() {
    return this.cart;
  }

  addToFavourite(product: Product) {
    this.favourites.push({ product: product, date: Date.now() });

    this.addFavouriteToLocalStorage();
  }

  addToViewedProduct(product: Product) {
    if (this.viewedProduct.some((item) => item.id == product.id)) {
      return;
    }

    if (this.viewedProduct.length == 4) {
      this.viewedProduct.splice(0, 1);

      this.viewedProduct.push(product);
      this.addViewedProductToLocalStorage();
      return;
    }

    this.viewedProduct.push(product);
    this.addViewedProductToLocalStorage();
  }

  getViewedProduct() {
    return this.viewedProduct;
  }

  removeFromFavourite(product: Product) {
    const index = this.favourites.findIndex(
      (item) => item.product.id == product.id
    );
    this.favourites.splice(index, 1);

    this.addFavouriteToLocalStorage();
  }

  addFavouriteToLocalStorage() {
    localStorage.setItem('TrendlyFavourites', JSON.stringify(this.favourites));
  }

  getFavouriteFromLocalStorage() {
    let value = localStorage.getItem('TrendlyFavourites');

    return value ? JSON.parse(value) : null;
  }

  getFavourite() {
    return this.favourites;
  }

  getViewedProductFromLocalStorage() {
    let value = localStorage.getItem('TrendlyViewed');

    return value ? JSON.parse(value) : null;
  }

  addViewedProductToLocalStorage() {
    localStorage.setItem('TrendlyViewed', JSON.stringify(this.viewedProduct));
  }

  getCartFromLocalStorage() {
    let value = localStorage.getItem('TrendlyCart');

    return value ? JSON.parse(value) : null;
  }

  addCartToLocalStorage() {
    localStorage.setItem('TrendlyCart', JSON.stringify(this.cart));
  }
}
