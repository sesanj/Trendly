import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class CheckoutComponent {
    cartTotal=70.90;
    shippingFee=15.00;
    freeShippingStandard=100;
    coupon="";
    discount=0.0;
    theShippingMethod="flat";

    get totalPrice():number{
      return this.cartTotal+this.shippingFee-this.discount;
    }

    get thePriceToFreeShipping():string{
      let price=this.freeShippingStandard-this.cartTotal;
      let formatted=price.toFixed(2);
      return formatted;
    }

  applyCoupon(){
      if(this.coupon=='theword'){
        this.discount=10.00;
      }else{
        this.discount=0.0;
      }
  }
  shippingMethod(way:string){
      this.theShippingMethod=way;
      if(this.theShippingMethod=="flat"){
        this.shippingFee=15.00;
      }else{
        this.shippingFee=0.0;
      }
  }
}
