import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FeaturesComponent, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  cardDetails: {
    label: string;
    title: string;
    description: string;
    click: () => void;
    image: string;
  }[] = [
    {
      label: "Men's Weekly Fashion 2025",
      title: 'Exclusive Designs',
      description: 'For all seasons.',
      click: this.menClothing,
      image: '4.png',
    },
    {
      label: 'Sales Arrivals',
      title: 'A Different Look',
      description: 'For different occasions.',
      click: this.menClothing,
      image: '5.png',
    },
    {
      label: "Women's Fashion 2025",
      title: "Trendly's Special",
      description: 'Styles by trends.',
      click: this.menClothing,
      image: '6.png',
    },
    {
      label: "Women's Fashion 2025",
      title: "Trendly's Special",
      description: 'Styles by trends.',
      click: this.menClothing,
      image: '3.png',
    },
  ];

  currentIndex: number = 0;
  visibleImages: number = 1;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  // Compute the transform style dynamically
  get getTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.visibleImages)}%)`;
  }

  // Navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cardDetails.length - this.visibleImages;
    }
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.cardDetails.length - this.visibleImages) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  menClothing() {}
}
