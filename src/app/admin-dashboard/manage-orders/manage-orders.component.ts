import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CurrencyPipe, NgClass, DatePipe, FormsModule, OrderDialogComponent],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css',
})
export class ManageOrdersComponent {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  user = this.userService.getUser();
  router = inject(Router);

  orders = this.orderService.getOrders();

  selectedOrderID = '';
  orderStatus!: OrderStatus;
  nav = 'ALL';

  constructor() {
    if (this.user != null && this.user.role != 'ADMIN') {
      this.router.navigate(['/home']);
    }
  }

  filterOrders(filter: string) {
    this.nav = filter;
    if (filter == 'ALL') {
      this.orders = this.orderService.getOrders();
      return;
    }

    this.orders = this.orderService
      .getOrders()
      .filter((order) => order.status == filter);
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
