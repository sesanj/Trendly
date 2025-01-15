import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductData } from '../../data/allProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  allProducts: Product[] = ProductData;

  constructor() {}

  getAllProducts() {
    return this.allProducts;
  }
}
