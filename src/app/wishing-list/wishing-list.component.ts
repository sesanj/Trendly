import { Component } from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-wishing-list',
  standalone: true,
  imports: [],
  templateUrl: './wishing-list.component.html',
  styleUrl: './wishing-list.component.css'
})
export class WishingListComponent {
  remove(product: Product) {}
  cart(product: any){
    this.remove(product);
  }
}
