import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order } from '../../models/product-order.model';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { UserServiceService } from '../../services/user-service.service';
import { users } from '../../../data/users';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  httpClient = inject(HttpClient);
  router = inject(Router);

  user = this.userService.getUser();
  allUsersContainer: User[] = [];
  allCustomers: User[] = [];
  clickedCustomer!: User;
  allOrders: Order[] = [];

  filter: string = 'all';

  constructor() {
    if (
      !this.userService.loggedInUserID ||
      this.userService.loggedInUserRole != 'ADMIN'
    ) {
      this.router.navigate(['/']);
    }

    this.getUsers();
    this.getOrders();
  }

  getUsers() {
    this.httpClient
      .get<{ users: User[] }>(`http://localhost:3000/users`)
      .subscribe({
        next: (data) => {
          this.allCustomers = data.users;
        },
        complete: () => {
          this.clickedCustomer = this.allCustomers[0];
          this.allUsersContainer = this.allCustomers;
        },
      });
  }

  checkCustomer(customer: User) {
    this.clickedCustomer = customer;
  }

  getOrders() {
    let orderData: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>(`http://localhost:3000/orders`)
      .subscribe({
        next: (data) => {
          orderData = data.orders;
        },
        complete: () => {
          this.allOrders = orderData;
        },
      });
  }

  totalOrders(email: string) {
    return this.allOrders.filter(
      (order) => order.customer.email.toLowerCase() == email.toLowerCase()
    ).length;
  }

  filterCustomers(filter: string) {
    const users = this.allUsersContainer;

    if (filter == 'all') {
      // this.allCustomers = users;
      this.getUsers();
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
