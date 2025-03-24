import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Order } from '../models/product-order.model';
import { OrderServiceService } from '../services/order-service.service';
import { OrderInfoComponent } from '../admin-dashboard/order-info/order-info.component';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FormsModule, NgIf, HeaderComponent, OrderInfoComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
})
export class TrackingComponent {
  orderService = inject(OrderServiceService);
  order!: Order;

  error: boolean = false;

  orderId: string = '';
  email: string = '';
  warning: string = '';

  trackOrder() {
    if (!this.email.includes('@') || !this.email.includes('.')) {
      this.warning = 'Please enter a valid email address.';
      return;
    }

    this.order = this.orderService
      .getOrders()
      .filter(
        (order) =>
          order.orderID == this.orderId &&
          order.customer.email.toLowerCase() == this.email.toLowerCase()
      )[0];
    this.warning = '';

    if (!this.order) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
