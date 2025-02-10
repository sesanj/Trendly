// @ts-ignore

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  selectedOption: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  firstname: string = '';
  lastname: string = '';
  phoneNumber:string='';
  state:string='';
  postal:string='';
  street:string='';

  orderForm: FormGroup;

  onSelectChange(event: any) {
    this.selectedOption = event.target.value; // Update input field with selected option
  }

  isFormSubmitted: boolean = false;

  // Flag to track if any field is empty
  formHasEmptyFields: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with validators
    this.orderForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required],Validators.pattern('^[a-zA-Z ]*$')]
      // phoneNumber:['',[Validators.required()]]
    });
  }


  // Method triggered on button click
  onSubmit() {
    this.isFormSubmitted = true;

    // Check if any field is empty
    if (!this.firstname || !this.lastname) {
      this.formHasEmptyFields = true;
      console.log('Please fill all fields!');
    } else {
      this.formHasEmptyFields = false;
      // If all fields are filled, log the values to the console
      console.log('First Name:', this.firstname);
      console.log('Last Name:', this.lastname);
    }
  }
  }

