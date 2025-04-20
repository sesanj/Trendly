import { Component, inject } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order } from '../../models/product-order.model';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { UserServiceService } from '../../services/user-service.service';
import { users } from '../../../data/users';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SiteLoaderComponent } from '../../site-loader/site-loader.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerInfoComponent, FormsModule, SiteLoaderComponent],
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

  isCustomerInfoOpen: boolean = false;

  isLoading: boolean = true;

  filter: string = 'all';

  constructor() {
    if (!this.userService.loggedInUserID) {
      this.router.navigate(['/']);
      return;
    }

    this.loggedUser();
    this.getUsers();
    this.getOrders();
  }

  loggedUser() {
    let user: User;
    this.httpClient
      .get<{ user: User }>(
        `https://trendly-backend-cme7.onrender.com/logged-user?userId=${this.userService.loggedInUserID}`
      )
      .subscribe({
        next: (data) => {
          user = data.user;
        },
        complete: () => {
          if (user.role !== 'ADMIN') {
            if (user.role === 'CUSTOMER') {
              this.router.navigate(['/myaccount/myorders']);
            }
          }
        },
      });
  }

  openCustomerInfo() {
    this.isCustomerInfoOpen = true;
  }

  closeCustomerInfo() {
    this.isCustomerInfoOpen = false;
  }

  stopClickEffect(event: MouseEvent) {
    event.stopPropagation();
  }

  getUsers() {
    this.httpClient
      .get<{ users: User[] }>(`https://trendly-backend-cme7.onrender.com/users`)
      .subscribe({
        next: (data) => {
          this.allCustomers = data.users;
        },
        complete: () => {
          this.clickedCustomer = this.allCustomers[0];
          this.allUsersContainer = this.allCustomers;

          this.isLoading = false;
        },
      });
  }

  checkCustomer(customer: User) {
    this.clickedCustomer = customer;
    this.openCustomerInfo();
  }

  getOrders() {
    let orderData: Order[] = [];

    this.httpClient
      .get<{ orders: Order[] }>(
        `https://trendly-backend-cme7.onrender.com/orders`
      )
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

  mobileFilterCustomers() {
    const users = this.allUsersContainer;

    if (this.filter == 'all') {
      this.getUsers();
      this.filter = 'all';
    } else if (this.filter == 'yes') {
      this.allCustomers = users.filter((user) => user.registered);
      this.filter = 'yes';
    } else if (this.filter == 'no') {
      this.allCustomers = users.filter((user) => !user.registered);
      this.filter = 'no';
    } else if ((this.filter = 'admin')) {
      this.allCustomers = users.filter((user) => user.role == 'ADMIN');
      this.filter = 'admin';
    }
  }
}
