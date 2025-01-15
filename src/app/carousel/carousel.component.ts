import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../product service/product-service.service';
import { Product } from '../models/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  productService = inject(ProductServiceService);

  products: Product[] = this.productService.getAllProducts();

  currentIndex: number = 0;
  visibleImages: number = 4; // Number of images to display at a time

  // Compute the transform style dynamically
  getTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.visibleImages)}%)`;
  }

  // Navigate to the previous slide
  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - this.visibleImages;
    }
  }

  // Navigate to the next slide
  nextSlide(): void {
    if (this.currentIndex < this.products.length - this.visibleImages) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
