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
import { User } from '../../models/user.model';
import { SiteLoaderComponent } from '../../site-loader/site-loader.component';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass,
    DatePipe,
    FormsModule,
    OrderDialogComponent,
    SiteLoaderComponent,
  ],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css',
})
export class ManageOrdersComponent {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  user = this.userService.getUser();
  router = inject(Router);
  httpClient = inject(HttpClient);

  isLoading: boolean = true;

  orders: Order[] = [];

  selectedOrderID = '';
  orderStatus!: OrderStatus;
  nav = 'ALL';

  constructor() {
    if (!this.userService.loggedInUserID) {
      this.router.navigate(['/']);
    }

    this.loggedUser();

    this.getOrders();
  }

  loggedUser() {
    let user: User;
    this.httpClient
      .get<{ user: User }>(
        `https://trendly-backend-cme7.onrender.com/logged-user?userId=${this.userService.loggedInUserID}`
      )
      .subscribe({
        next: (data) => {
          user = data.user;
        },
        complete: () => {
          if (user.role !== 'ADMIN') {
            if (user.role === 'CUSTOMER') {
              this.router.navigate(['/myaccount/myorders']);
            } else {
              this.router.navigate(['/']);
            }
          }
        },
      });
  }

  getOrders() {
    let savedOrders: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>(
        'https://trendly-backend-cme7.onrender.com/orders'
      )
      .subscribe({
        next: (data) => {
          savedOrders = data.orders.reverse();
        },
        complete: () => {
          this.orders = savedOrders;

          this.isLoading = false;
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
        `https://trendly-backend-cme7.onrender.com/filter-orders?filter=${filter}`
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
        `https://trendly-backend-cme7.onrender.com/filter-orders?filter=${this.nav}`
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
