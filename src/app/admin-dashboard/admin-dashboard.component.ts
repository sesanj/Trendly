import { Component, Input, input } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [OverviewComponent, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  @Input() set nav(nav: String) {
    switch (nav) {
      case 'overview':
        this.navigation = 'overview';
        break;
      case 'manage-orders':
        this.navigation = 'manage-orders';
        break;
      case 'customers':
        this.navigation = 'customers';
        break;
      case 'history':
        this.navigation = 'history';
        break;
      default:
        this.navigation = 'overview';
    }
  }

  navigation: string = '';

  // showNav() {
  //   console.log('Clicked: ' + this.navigation);
  // }
}
