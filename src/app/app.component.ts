import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductServiceService } from './product service/product-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FeaturesComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productService = inject(ProductServiceService);
}
