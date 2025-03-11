import { Component, inject, Inject, Input, input } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { Router, RouterLink } from '@angular/router';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [OverviewComponent, RouterLink, ManageOrdersComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  router = inject(Router);
  heading!: string;

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
      default:
        this.navigate();
    }
  }

  navigation: string = '';

  navigate() {
    this.router.navigate(['/myaccount/overview']);
  }
}
