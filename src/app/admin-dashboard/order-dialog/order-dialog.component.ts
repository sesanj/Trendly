import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Order, OrderStatus } from '../../models/product-order.model';
import { OrderServiceService } from '../../services/order-service.service';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-order-dialog',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, FormsModule, DatePipe, NgClass],
  templateUrl: './order-dialog.component.html',
  styleUrl: './order-dialog.component.css',
})
export class OrderDialogComponent {
  @Input({ required: true }) order!: Order;
  @Input({ required: true }) orderIsUpdatable!: boolean;
  @Input({ required: true }) orderStatus!: OrderStatus;

  @Output() closeDialog = new EventEmitter<boolean>();

  orderService = inject(OrderServiceService);
  productService = inject(ProductServiceService);

  closeDialogBox() {
    this.closeDialog.emit(true);
  }

  updateOrder(orderid: string) {
    this.orderService.updateOrderStatus(this.orderStatus, orderid);
  }

  productImage(id: string) {
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id === id);

    return product[0].image?.image1;
  }

  totalProducts(order: Order) {
    let productsTotal = 0;
    order.products.forEach((product) => (productsTotal += product.quantity));

    return productsTotal;
  }
}
