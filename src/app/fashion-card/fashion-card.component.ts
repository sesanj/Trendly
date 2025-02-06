import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fashion-card',
  standalone: true,
  imports: [],
  templateUrl: './fashion-card.component.html',
  styleUrl: './fashion-card.component.css',
})
export class FashionCardComponent {
  @Input() cardDetails!: {
    label: string;
    title: string;
    description: string;
    click: () => void;
    image: string;
  };
}
