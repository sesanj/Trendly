import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductServiceService } from '../services/product-service.service';
import { CartProduct, Order } from '../models/product-order.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    ReactiveFormsModule, // This should be enough
    NgIf,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe,
    FormsModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  productService = inject(ProductServiceService);
  orderService = inject(OrderServiceService);
  userService = inject(UserServiceService);
  router = inject(Router);
  cartProduct: CartProduct[] = this.productService.getCart();

  orderId: string = '';

  shippingMethod!: string;
  shippingFee: number = 0;
  paymentMethod: string = 'transfer';
  termsAccepted: boolean = false;

  selectedOption: string = '';
  orderForm: FormGroup;

  // Flag to track if the form is submitted
  isFormSubmitted: boolean = false;

  // Flag to track if the form has any empty fields
  formHasEmptyFields: boolean = false;

  ngOnInit() {
    if (this.cartProduct.length == 0) {
      this.navigate();
    }
    if (this.cartTotal() >= 150) {
      this.shippingMethod = 'free';
      this.shippingFee = 0;
    } else {
      this.shippingMethod = 'flat';
      this.shippingFee = 15;
    }

    if (this.orderId == '') {
      this.orderId = this.generateOrderID();
    } else {
      return;
    }
  }

  constructor(private fb: FormBuilder) {
    // Initialize the form group with validators
    this.orderForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      street: ['', [Validators.required]],
      country: ['', [Validators.required]],
      town: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    setTimeout(() => {
      const user = this.userService.getUser();

      if (user) {
        console.log('User Is Logged In');
        this.orderForm.patchValue({
          firstname: user.firstName,
          lastname: user.lastName,
          email: user.email,
        });
      }
    }, 500);
  }

  // Submit form logic
  onSubmit(): void {
    this.isFormSubmitted = true; // Set flag to show error message when form is submitted

    // Check if any required fields are empty
    if (this.orderForm.invalid) {
      this.formHasEmptyFields = true; // Set flag if the form has invalid (empty) fields

      return;
    } else if (!this.termsAccepted) {
      return;
    } else {
      this.formHasEmptyFields = false; // Set flag to false if all fields are filled
      // console.log(this.orderForm.value.firstname);
      this.getOrder();

      //TODO: Add navigation here to thank you page
    }
  }

  cartTotal() {
    let price = 0;
    for (let item of this.productService.cart) {
      price += item.totalPrice * item.quantity;
    }
    return price;
  }

  shipping(method: string) {
    this.shippingMethod = method;

    if (method == 'pickup' || method == 'free') {
      this.shippingFee = 0.0;
    } else {
      this.shippingFee = 15.0;
    }
  }

  navigate() {
    this.router.navigate(['/cart']);
  }

  generateOrderID() {
    let orderID: string = '';
    let letters: string[] = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    for (let i = 0; i < 3; i++) {
      orderID += this.randomNumber();
      orderID += letters[this.randomNumber()];
    }

    return orderID;
  }

  randomNumber() {
    return Math.floor(Math.random() * (25 - 0 + 1)) + 0;
  }

  getOrder() {
    const userData = this.orderForm.value;
    const order: Order = {
      orderID: this.generateOrderID(),
      customer: {
        firstName: userData.firstname,
        lastName: userData.lastname,
        email: userData.email,
        phoneNumber: userData.phone,
        registered: this.userService.getUser()?.registered || false,
      },
      orderTotal: this.cartTotal(),
      products: this.cartProduct,
      status: 'PENDING',
      date: Date.now(),
      deliveryInfo: {
        country: userData.country,
        state: userData.state,
        address: userData.street,
        townCity: userData.town,
        postalCode: userData.postal,
      },
    };

    this.orderService.addOrder(order);
  }
}
