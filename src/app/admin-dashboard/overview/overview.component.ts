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

  constructor() {
    if (
      !this.userService.loggedInUserID ||
      this.userService.loggedInUserRole != 'ADMIN'
    ) {
      this.router.navigate(['/']);
    }
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
    this.allOrders.filter((order) => (revenue += order.orderTotal));

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

  productInventory() {
    return this.productService.getAllProducts().length;
  }

  userCount() {
    return this.userService.allUsers.length;
  }
}
