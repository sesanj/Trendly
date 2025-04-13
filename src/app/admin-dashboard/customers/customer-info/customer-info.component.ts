import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { User } from '../../../models/user.model';
import { OrderServiceService } from '../../../services/order-service.service';
import { Router, RouterLink } from '@angular/router';
import { ProductServiceService } from '../../../services/product-service.service';
import { UserServiceService } from '../../../services/user-service.service';
import { Order } from '../../../models/product-order.model';
import { HttpClient } from '@angular/common/http';

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
  userService = inject(UserServiceService);
  httpClient = inject(HttpClient);
  @Input({ required: true }) customer!: User;

  allOrders: Order[] = [];
  customerOrders: Order[] = [];

  constructor() {
    let orderData: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>(`http://localhost:3000/orders`)
      .subscribe({
        next: (data) => {
          orderData = data.orders;
        },
        complete: () => {
          this.allOrders = orderData;
        },
      });
  }

  getCustomerOrder(email: string) {
    return this.allOrders.filter(
      (order) => order.customer.email.toLowerCase() == email.toLowerCase()
    );
  }

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }
}
