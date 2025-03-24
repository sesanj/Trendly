import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { ProductServiceService } from '../../services/product-service.service';
import { UserServiceService } from '../../services/user-service.service';

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
export class OverviewComponent {
  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);

  user = this.userService.getUser();

  orders = this.orderService.getOrders();

  selectedOrderID = '';
  orderStatus!: OrderStatus;

  constructor() {
    if (this.user != null && this.user.role != 'ADMIN') {
      this.router.navigate(['/home']);
    }
  }

  recentOrders() {
    return this.orderService.getOrders();
  }

  isDialogClosed(event: boolean) {
    if (event == true) {
      this.selectedOrderID = ' ';
    }
  }

  revenue() {
    let revenue = 0;
    this.orderService
      .getOrders()
      .filter((order) => (revenue += order.orderTotal));

    return revenue;
  }

  pendingOrders() {
    return this.orderService
      .getOrders()
      .filter((order) => order.status === 'PENDING').length;
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

  totalSales() {
    let totalSales = 0;
    this.orders.forEach((order) =>
      order.products.forEach((product) => (totalSales += product.quantity))
    );

    return totalSales;
  }

  productInventory() {
    return this.productService.getAllProducts().length;
  }

  userCount() {
    return this.userService.allUsers.length;
  }
}
