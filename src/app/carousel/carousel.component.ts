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
  laptopView: boolean = false;
  tabView: boolean = false;
  mobileView: boolean = false;

  tabVisibleImages: number = 3;
  mobileVisibleImages: number = 2;

  // Compute the transform style dynamically
  get getTransform() {
    if (this.tabView == false && this.mobileView == false) {
      return `translateX(-${this.currentIndex * (100 / this.visibleImages)}%)`;
    } else {
      return;
    }
  }

  get getTabTransform() {
    if (this.laptopView == false && this.mobileView == false) {
      return `translateX(-${
        this.currentIndex * (100 / this.tabVisibleImages)
      }%)`;
    } else {
      return;
    }
  }

  get getMobileTransform() {
    if (this.laptopView == false && this.tabView == false) {
      return `translateX(-${
        this.currentIndex * (100 / this.mobileVisibleImages)
      }%)`;
    } else {
      return;
    }
  }

  // Navigate to the previous slide
  prevSlide(screen: string) {
    if (screen == 'laptop') {
      this.laptopView = true;
      this.tabView = false;
      this.mobileView = false;
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.products.length - this.visibleImages;
      }
    } else if (screen == 'tab') {
      this.tabView = true;
      this.laptopView = false;
      this.mobileView = false;
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.products.length - this.tabVisibleImages;
      }
    } else if (screen == 'mobile') {
      this.tabView = false;
      this.laptopView = false;
      this.mobileView = true;
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.products.length - this.mobileVisibleImages;
      }
    }
  }

  // Navigate to the next slide
  nextSlide(screen: string) {
    if (screen == 'laptop') {
      this.laptopView = true;
      this.tabView = false;
      this.mobileView = false;
      if (this.currentIndex < this.products.length - this.visibleImages) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    } else if (screen == 'tab') {
      this.tabView = true;
      this.laptopView = false;
      this.mobileView = false;
      if (this.currentIndex < this.products.length - this.tabVisibleImages) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    } else if (screen == 'mobile') {
      this.tabView = false;
      this.laptopView = false;
      this.mobileView = true;
      if (this.currentIndex < this.products.length - this.mobileVisibleImages) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }
  }
}
