import { Component, inject, Input } from '@angular/core';
import { Customer, Order } from '../../../models/product-order.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { User } from '../../../models/user.model';
import { OrderServiceService } from '../../../services/order-service.service';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../../../services/product-service.service';

@Component({
  selector: 'app-customer-info',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, DatePipe],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css',
})
export class CustomerInfoComponent {
  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);
  @Input({ required: true }) customer!: User;

  customerOrders() {
    return this.orderService
      .getOrders()
      .filter(
        (order) =>
          order.customer.email.toLowerCase() ==
          this.customer.email.toLowerCase()
      );
  }

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }
}
