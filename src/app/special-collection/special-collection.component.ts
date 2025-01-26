import { Product } from './../models/product.model';
import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductServiceService } from '../product service/product-service.service';

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

  product: Product[] = [this.allProducts[7], this.allProducts[16]];

  navStyle: string = '';

  getNew() {}

  getHot() {}
}
