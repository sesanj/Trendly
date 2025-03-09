import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order, OrderStatus } from '../../models/product-order.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CurrencyPipe, NgClass, DatePipe, FormsModule, OrderDialogComponent],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css',
})
export class ManageOrdersComponent {
  orderService = inject(OrderServiceService);

  orders = this.orderService.getOrders();

  selectedOrderID = '';
  orderStatus!: OrderStatus;
  nav = 'ALL';

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
