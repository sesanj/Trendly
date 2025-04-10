import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {CardSectionComponent} from "./card-section/card-section.component";
import {CategorySectionComponent} from "./category-section/category-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, CardSectionComponent, CategorySectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      window.scrollTo({ top: 0 });
    });
  }
}
