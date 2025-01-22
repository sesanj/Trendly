import { Features } from '../models/features.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  features: Features[] = [
    {
      id: 'f1',
      title: 'Premium Products',
      description: 'We sell only the best products with top quality',
      img: { src: 'premium2.svg', alt: 'A premium quality icon' },
    },
    {
      id: 'f2',
      title: 'Online Support',
      description: 'Issue with an order?, Reach us anytime',
      img: { src: 'support.svg', alt: 'A customer support icon' },
    },
    {
      id: 'f3',
      title: 'Free Shipping',
      description: 'For all orders above $350 world wide.',
      img: { src: 'shipping.svg', alt: 'A delivery icon' },
    },
    {
      id: 'f4',
      title: 'Flexible Payments',
      description: 'We support a wide range of payment options',
      img: { src: 'payment.svg', alt: 'A payment icon' },
    },
  ];
}
