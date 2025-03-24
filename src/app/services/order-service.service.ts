import { Injectable } from '@angular/core';
import { orders } from '../../data/orders';
import { Order, OrderStatus } from '../models/product-order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  allOrders: Order[] = orders.reverse();

  constructor() {}

  getOrders() {
    return this.allOrders;
  }

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

    this.allOrders.some((order) =>
      order.orderID == orderId ? (order.status = status) : ''
    );
  }

  addOrder(order: Order) {
    this.allOrders.push(order);

    console.log('Order Added!');
  }
}
