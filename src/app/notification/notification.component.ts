import { Component, inject } from '@angular/core';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  notification = inject(NotificationService);
}
