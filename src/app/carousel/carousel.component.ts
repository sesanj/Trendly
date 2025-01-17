import { Component, Input } from '@angular/core';
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
  @Input({ required: true }) products!: Product[];

  currentIndex: number = 0;
  visibleImages: number = 4;

  // Compute the transform style dynamically
  get getTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.visibleImages)}%)`;
  }

  // Navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - this.visibleImages;
    }
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.products.length - this.visibleImages) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
