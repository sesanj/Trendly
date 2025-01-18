import { Component } from '@angular/core';
import { FashionCardComponent } from '../fashion-card/fashion-card.component';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [FashionCardComponent],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css',
})
export class CardSectionComponent {
  cardData = [
    {
      label: "Men's Fashion 2025",
      title: 'Exclusive Designs',
      description: 'For all seasons.',
      click: this.menClothing,
      image: 'fashion3.png',
    },
    {
      label: 'New Arrivals',
      title: 'Look Different',
      description: 'For different occasions.',
      click: this.menClothing,
      image: 'fashion1.png',
    },
    {
      label: "Women's Fashion 2025",
      title: "Trendly's Special",
      description: 'Styles by trends.',
      click: this.menClothing,
      image: 'fashion2.png',
    },
  ];

  menClothing() {}
}
