import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
    orderId: string = '';
    email: string = '' ;
    orderStatus: string = '' ;
    checkStatus(){
      if(this.orderId && this.email ){
        this.orderStatus = `Order ${this.orderId} is currently being processed.`;
        console.log(this.orderId);
      }else if(!this.email.includes("@") || !this.email.includes(".")){
        this.orderStatus= "Please enter a valid email address.";
      }
      else{
        this.orderStatus = `Please enter a valid OrderID .`;

      }
    }

}
