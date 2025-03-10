import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartTotal = 70.9;
  shippingFee = 15.0;
  freeShippingStandard = 100;
  coupon = '';
  discount = 0.0;
  theShippingMethod = 'flat';

  totalPrice() {
    return this.cartTotal + this.shippingFee - this.discount;
  }

  thePriceToFreeShipping(): string {
    let price = this.freeShippingStandard - this.cartTotal;
    let formatted = price.toFixed(2);

    return formatted;
  }

  applyCoupon() {
    if (this.coupon == 'theword') {
      this.discount = 10.0;
    } else {
      this.discount = 0.0;
    }
  }
  shippingMethod(way: string) {
    this.theShippingMethod = way;
    if (this.theShippingMethod == 'flat') {
      this.shippingFee = 15.0;
    } else {
      this.shippingFee = 0.0;
    }
  }
}
