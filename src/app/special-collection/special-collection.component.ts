import { Product } from './../models/product.model';
import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-special-collection',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './special-collection.component.html',
  styleUrl: './special-collection.component.css',
})
export class SpecialCollectionComponent {
  productService = inject(ProductServiceService);
  allProducts: Product[] = this.productService.getAllProducts();

  product: Product[] = [this.allProducts[5], this.allProducts[13]];

  navStyle: string = 'NEW';

  ngOnInit() {
    this.getNew();
  }

  getNew() {
    let newProducts = this.allProducts.filter((item) => item.tag == 'NEW');

    this.product[0] = newProducts[this.randomNumber(newProducts.length - 1, 0)];
    this.product[1] = newProducts[this.randomNumber(newProducts.length - 1, 0)];

    this.navStyle = 'NEW';
  }

  getHot() {
    let hotProduct = this.allProducts.filter((item) => item.tag == 'HOT');

    this.product[0] = hotProduct[this.randomNumber(hotProduct.length - 1, 0)];
    this.product[1] = hotProduct[this.randomNumber(hotProduct.length - 1, 0)];
    this.navStyle = 'HOT';
  }

  randomNumber(max: number, min: number) {
    let number = Math.floor(Math.random() * (max - min + 1));

    return number;
  }
}
