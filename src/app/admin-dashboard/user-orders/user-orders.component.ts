import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    NgClass,
    DatePipe,
    FormsModule,
    OrderDialogComponent,
  ],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css',
})
export class UserOrdersComponent {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);

  user = this.userService.getUser();

  orders = this.orderService.getOrders();

  selectedOrderID = '';
  orderStatus!: OrderStatus;

  constructor() {
    if (this.user != null && this.user.role != 'CUSTOMER') {
      this.router.navigate(['/home']);
    }
  }

  recentOrders() {
    return this.orderService
      .getOrders()
      .filter(
        (item) =>
          item.customer.email.toLowerCase() == this.user?.email.toLowerCase()
      );
  }

  isDialogClosed(event: boolean) {
    if (event == true) {
      this.selectedOrderID = ' ';
    }
  }

  customer(order: Order) {
    return order.customer.firstName + ' ' + order.customer.lastName;
  }

  delivery(order: Order) {
    return order.deliveryInfo.country + ', ' + order.deliveryInfo.state;
  }

  displayOrderInfo(id: string, status: OrderStatus) {
    this.selectedOrderID = id;
    this.orderStatus = status;
  }

  totalProducts(order: Order) {
    let productsTotal = 0;
    order.products.forEach((product) => (productsTotal += product.quantity));

    return productsTotal;
  }
}
