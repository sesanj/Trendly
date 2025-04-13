import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Order } from '../models/product-order.model';
import { OrderServiceService } from '../services/order-service.service';
import { OrderInfoComponent } from '../admin-dashboard/order-info/order-info.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FormsModule, NgIf, HeaderComponent, OrderInfoComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
})
export class TrackingComponent {
  orderService = inject(OrderServiceService);
  order!: Order | null;
  httpClient = inject(HttpClient);

  error: boolean = false;

  orderId: string = '';
  email: string = '';
  warning: string = '';

  trackOrder() {
    if (this.orderId == '') {
      this.warning = 'Please enter a valid order Id';
      return;
    }

    if (!this.email.includes('@') || !this.email.includes('.')) {
      this.warning = 'Please enter a valid email address.';
      this.order = null;
      return;
    }

    this.warning = '';

    this.httpClient
      .get<{ track: Order }>(
        `http://localhost:3000/track-order?email=${this.email}&orderId=${this.orderId}`
      )
      .subscribe({
        next: (data) => {
          this.order = data.track;
        },
        complete: () => {
          if (!this.order) {
            this.error = true;
          } else {
            this.error = false;
          }
        },
      });
  }
}
