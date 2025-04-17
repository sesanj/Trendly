import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { ProductServiceService } from '../../services/product-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { SiteLoaderComponent } from '../../site-loader/site-loader.component';

@Component({
  selector: 'app-overview',
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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);
  httpClient = inject(HttpClient);

  user!: User;

  selectedOrderID = '';
  orderStatus!: OrderStatus;

  allOrders: Order[] = [];

  isLoading = true;

  constructor() {
    if (
      !this.userService.loggedInUserID
      // ||
      // this.userService.loggedInUserRole != 'ADMIN'
    ) {
      this.router.navigate(['/']);
    }

    this.loggedUser();
  }

  loggedUser() {
    let user: User;
    this.httpClient
      .get<{ user: User }>(
        `http://localhost:3000/logged-user?userId=${this.userService.loggedInUserID}`
      )
      .subscribe({
        next: (data) => {
          user = data.user;
        },
        complete: () => {
          if (user.role != 'ADMIN') {
            if (user.role === 'CUSTOMER') {
              this.router.navigate(['/myaccount/myorders']);
            } else {
              this.router.navigate(['/']);
            }
          }

          this.isLoading = false;
        },
      });
  }

  ngOnInit() {
    this.getOrders();
  }

  recentOrders() {
    return this.allOrders;
  }

  getOrders() {
    let orders: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>('http://localhost:3000/orders')
      .subscribe({
        next: (data) => {
          orders = data.orders.reverse();
        },
        complete: () => {
          this.allOrders = orders;
        },
      });
  }

  isDialogClosed(event: boolean) {
    if (event == true) {
      this.selectedOrderID = ' ';
    }
  }

  revenue() {
    let revenue = 0;
    this.allOrders.forEach((order) =>
      order.status == 'DELIVERED'
        ? (revenue += order.orderTotal)
        : (revenue += 0)
    );

    return revenue;
  }

  pendingOrders() {
    return this.allOrders.filter((order) => order.status === 'PENDING').length;
  }

  get totalSales() {
    let totalSales = 0;

    this.allOrders.forEach((order) =>
      order.products.forEach((product) => (totalSales += product.quantity))
    );
    return totalSales;
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

  productInventory() {
    return this.productService.getAllProducts().length;
  }

  userCount() {
    return this.userService.allUsers.length;
  }
}
