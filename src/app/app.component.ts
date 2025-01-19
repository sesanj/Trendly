<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProject';
=======
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
>>>>>>> 3317c231c89db792a5bb85cd888b3081c5f8bb6b
}
