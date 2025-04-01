import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Order } from '../../models/product-order.model';
import { OrderServiceService } from '../../services/order-service.service';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-order-info',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, FormsModule, DatePipe, NgClass],
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.css',
})
export class OrderInfoComponent {
  @Input({ required: true }) order!: Order;

  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }

  totalProducts(order: Order) {
    let productsTotal = 0;
    order.products.forEach((product) => (productsTotal += product.quantity));

    return productsTotal;
  }
}
