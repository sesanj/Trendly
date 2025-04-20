import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

import { UserServiceService } from '../../services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { SiteLoaderComponent } from '../../site-loader/site-loader.component';

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
    SiteLoaderComponent,
  ],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css',
})
export class UserOrdersComponent implements OnInit {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);

  user = this.userService.getUser();
  httpClient = inject(HttpClient);

  isLoading: boolean = true;

  myOrders: Order[] = [];
  loggedUser!: User;
  userId!: string;
  userRole!: string;

  selectedOrderID = '';
  orderStatus!: OrderStatus;

  constructor() {
    this.userId = this.userService.loggedInUserID;
    this.userRole = this.userService.loggedInUserRole;

    if (!this.userId) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.userId = this.userService.loggedInUserID;
    this.httpClient
      .get<{ user: User }>(
        `https://trendly-backend-cme7.onrender.com/logged-user?userId=${this.userId}`
      )
      .subscribe({
        next: (data) => {
          this.loggedUser = data.user;
        },
        complete: () => {
          this.getAllOrders();
        },
      });
  }

  getAllOrders() {
    this.httpClient
      .get<{ order: Order[] }>(
        `https://trendly-backend-cme7.onrender.com/user-orders?email=${this.loggedUser.email}`
      )
      .subscribe({
        next: (data) => {
          this.myOrders = data.order.reverse();
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  isDialogClosed(event: boolean) {
    if (event == true) {
      this.selectedOrderID = ' ';
    }
  }

  customer(order: Order) {
    return order.customer.firstName + ' ' + order.customer.lastName;
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
