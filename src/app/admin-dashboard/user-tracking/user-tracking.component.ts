import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderInfoComponent } from '../order-info/order-info.component';
import { Order } from '../../models/product-order.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-tracking',
  standalone: true,
  imports: [FormsModule, OrderInfoComponent],
  templateUrl: './user-tracking.component.html',
  styleUrl: './user-tracking.component.css',
})
export class UserTrackingComponent {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);
  httpClient = inject(HttpClient);

  user = this.userService.getUser();
  order!: Order;

  error: boolean = false;

  orderId: string = '';
  email: string = '';

  constructor() {
    if (!this.userService.loggedInUserID) {
      this.router.navigate(['/home']);
    }
  }

  trackOrder() {
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
