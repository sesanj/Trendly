import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import {CheckoutComponent} from "./shoppingcart/shoppingcart.component";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [HeaderComponent, FooterComponent, RouterOutlet, CheckoutComponent],
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
