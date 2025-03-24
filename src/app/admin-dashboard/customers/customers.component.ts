import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order } from '../../models/product-order.model';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { UserServiceService } from '../../services/user-service.service';
import { users } from '../../../data/users';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerInfoComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  user = this.userService.getUser();
  router = inject(Router);

  allCustomers: User[] = this.userService.allUsers;
  clickedCustomer: User = this.allCustomers[0];

  filter: string = 'all';

  constructor() {
    if (this.user != null && this.user.role != 'ADMIN') {
      this.router.navigate(['/home']);
    }
  }

  checkCustomer(customer: User) {
    this.clickedCustomer = customer;
  }

  customerOrders(customer: User) {
    return this.orderService
      .getOrders()
      .filter(
        (order) =>
          order.customer.email.toLowerCase() == customer.email.toLowerCase()
      );
  }

  filterCustomers(filter: string) {
    const users = this.userService.allUsers;

    if (filter == 'all') {
      this.allCustomers = users;
      this.filter = 'all';
    } else if (filter == 'yes') {
      this.allCustomers = users.filter((user) => user.registered);
      this.filter = 'yes';
    } else if (filter == 'no') {
      this.allCustomers = users.filter((user) => !user.registered);
      this.filter = 'no';
    } else if ((filter = 'admin')) {
      this.allCustomers = users.filter((user) => user.role == 'ADMIN');
      this.filter = 'admin';
    }
  }
}
