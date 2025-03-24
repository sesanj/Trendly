import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderInfoComponent } from '../order-info/order-info.component';
import { Order } from '../../models/product-order.model';

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

  user = this.userService.getUser();
  order!: Order;

  error: boolean = false;

  orderId: string = '';
  email: string = '';

  constructor() {
    if (this.user != null && this.user.role != 'CUSTOMER') {
      this.router.navigate(['/home']);
    }
  }

  trackOrder() {
    this.order = this.orderService
      .getOrders()
      .filter(
        (order) =>
          order.orderID == this.orderId &&
          order.customer.email.toLowerCase() == this.email.toLowerCase()
      )[0];

    if (!this.order) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
