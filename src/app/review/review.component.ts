import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  reviews: { description: string; writer: string; country: string }[] = [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'Veronica Sanchez',
      country: 'Barcelona Spain',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'James Carl',
      country: 'United States',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'Brad Felix',
      country: 'United Kingdom',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'James Carl',
      country: 'United States',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'Brad Felix',
      country: 'United Kingdom',
    },
  ];

  currentIndex: number = 0;
  visibleImages: number = 3;

  // Compute the transform style dynamically
  get getTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.visibleImages)}%)`;
  }

  // Navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - this.visibleImages;
    }
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.reviews.length - this.visibleImages) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
