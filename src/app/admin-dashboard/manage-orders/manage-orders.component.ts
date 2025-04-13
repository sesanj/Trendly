import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  httpClient = inject(HttpClient);

  orders: Order[] = [];

  selectedOrderID = '';
  orderStatus!: OrderStatus;
  nav = 'ALL';

  constructor() {
    if (
      !this.userService.loggedInUserID ||
      this.userService.loggedInUserRole != 'ADMIN'
    ) {
      this.router.navigate(['/']);
    }

    this.getOrders();
  }

  getOrders() {
    let savedOrders: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>('http://localhost:3000/orders')
      .subscribe({
        next: (data) => {
          savedOrders = data.orders.reverse();
        },
        complete: () => {
          this.orders = savedOrders;
        },
      });
  }

  get totalOrders() {
    return this.orders.length;
  }

  filterOrders(filter: string) {
    this.nav = filter;
    if (filter == 'ALL') {
      this.getOrders();
      return;
    }

    let savedOrders: Order[] = [];
    this.httpClient
      .get<{ filtered: Order[] }>(
        `http://localhost:3000/filter-orders?filter=${filter}`
      )
      .subscribe({
        next: (data) => {
          savedOrders = data.filtered.reverse();
        },
        complete: () => {
          this.orders = savedOrders;
        },
      });
  }

  mobileFilter() {
    // this.nav = filter;
    if (this.nav == 'ALL') {
      this.getOrders();
      return;
    }

    let savedOrders: Order[] = [];
    this.httpClient
      .get<{ filtered: Order[] }>(
        `http://localhost:3000/filter-orders?filter=${this.nav}`
      )
      .subscribe({
        next: (data) => {
          savedOrders = data.filtered.reverse();
        },
        complete: () => {
          this.orders = savedOrders;
        },
      });
  }

  isDialogClosed(event: boolean) {
    if (event == true) {
      this.selectedOrderID = ' ';
      this.filterOrders(this.nav);
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
