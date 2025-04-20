import { Component, inject, Inject, Input, input } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { Router, RouterLink } from '@angular/router';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { UserServiceService } from '../services/user-service.service';
import { CustomersComponent } from './customers/customers.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserTrackingComponent } from './user-tracking/user-tracking.component';
import { SiteLoaderComponent } from '../site-loader/site-loader.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    OverviewComponent,
    RouterLink,
    ManageOrdersComponent,
    CustomersComponent,
    UserOrdersComponent,
    UserTrackingComponent,
    SiteLoaderComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  router = inject(Router);
  heading!: string;
  userService = inject(UserServiceService);

  isNavOpen: boolean = false;

  // user = this.userService.getUser();

  @Input() set nav(nav: String) {
    switch (nav) {
      case 'overview':
        this.navigation = 'overview';
        this.heading = 'Overview';
        break;
      case 'manage-orders':
        this.heading = 'Manage Orders';
        this.navigation = 'manage-orders';
        break;
      case 'customers':
        this.heading = 'Customer Insight';
        this.navigation = 'customers';
        break;
      case 'myorders':
        this.heading = 'My Orders';
        this.navigation = 'myorders';
        break;
      case 'track':
        this.heading = 'Track Order';
        this.navigation = 'track';
        break;
      default:
        this.navigate();
    }
  }

  constructor() {
    console.log('UserRole: ', this.userService.loggedInUserRole);

    if (!this.userService.loggedInUserID) {
      this.router.navigate(['/home']);
      console.log('No User');
    } else {
      console.log('User Active');
    }
  }

  navigation: string = '';

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  stopClickEffect(event: MouseEvent) {
    event.stopPropagation();
  }

  navigate() {
    this.router.navigate(['/myaccount/overview']);
  }

  logout() {
    this.userService.logOut();
    this.router.navigate(['/home']);
  }

  userName() {
    return this.userService.getUser()?.firstName;
  }

  get user() {
    return this.userService.getUser();
  }
}
