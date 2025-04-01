import { inject, Injectable } from '@angular/core';
import { Order, OrderStatus } from '../models/product-order.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  httpClient = inject(HttpClient);
  productService = inject(ProductServiceService);
  router = inject(Router);

  constructor() {}

  updateOrderStatus(status: OrderStatus, orderId: string) {
    if (
      status != 'PENDING' &&
      status != 'PROCESSING' &&
      status != 'OUT FOR DELIVERY' &&
      status != 'DELIVERED' &&
      status != 'CANCELED'
    ) {
      console.log('Invalid Status Entered');
      return;
    }

    this.updateOrderInDatabase(orderId, status);
  }

  addOrder(order: Order) {
    this.addOrderToDatabase(order);
    this.productService.cart = [];
    localStorage.removeItem('TrendlyCart');
    this.router.navigate(['/cart']);
  }

  addOrderToDatabase(customerOrder: Order) {
    this.httpClient
      .put('http://localhost:3000/add-order', { order: customerOrder })
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  updateOrderInDatabase(orderID: string, status: string) {
    this.httpClient
      .put('http://localhost:3000/update-order', {
        orderID: orderID,
        orderStatus: status,
      })
      .subscribe({});
  }
}
