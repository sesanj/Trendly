import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { ProductServiceService } from '../../services/product-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NgClass, DatePipe, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);

  orders = this.orderService.getOrders();
  orderIsUpdatable = false;

  orderID = '';

  orderStatus!: OrderStatus;

  recentOrders() {
    return this.orderService.getOrders();
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
    this.orderID = id;
    this.orderStatus = status;
  }

  closeDialogBox() {
    this.orderID = '';
  }

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }

  updateOrder(orderid: string) {
    this.orderService.updateOrderStatus(this.orderStatus, orderid);
  }
}
