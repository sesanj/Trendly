import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { OrderInfoComponent } from '../admin-dashboard/order-info/order-info.component';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/product-order.model';

@Component({
  selector: 'app-order-completed',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, OrderInfoComponent],
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.css',
})
export class OrderCompletedComponent {
  httpClient = inject(HttpClient);
  id!: string;

  @Input()
  set orderId(orderID: string) {
    this.id = orderID;
  }

  order!: Order;

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.httpClient
      .get<{ completed: Order }>(
        `http://localhost:3000/completed-order?orderId=${this.id}`
      )
      .subscribe({
        next: (data) => {
          this.order = data.completed;
        },
        complete: () => {
          if (!this.order) {
            // this.error = true;
          } else {
            // this.error = false;
          }
        },
      });
  }
}
