import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../product service/product-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  service = inject(ProductServiceService);
}
