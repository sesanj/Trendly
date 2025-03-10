import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    ReactiveFormsModule, // This should be enough
    NgForOf,
    NgIf
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  selectedOption: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  orderForm: FormGroup;

  // Flag to track if the form is submitted
  isFormSubmitted: boolean = false;

  // Flag to track if the form has any empty fields
  formHasEmptyFields: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with validators
    this.orderForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      street: ['', [Validators.required]],
      Town: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Postal: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]+$')]]
    });
  }

  // Method triggered when the selected option changes
  onSelectChange(event: any) {
    this.selectedOption = event.target.value; // Update input field with selected option
  }

  // Submit form logic
  onSubmit(): void {
    this.isFormSubmitted = true; // Set flag to show error message when form is submitted

    // Check if any required fields are empty
    if (this.orderForm.invalid) {
      this.formHasEmptyFields = true; // Set flag if the form has invalid (empty) fields
      console.log("Form has empty fields");
    } else {
      this.formHasEmptyFields = false; // Set flag to false if all fields are filled
      console.log('Form Submitted:', this.orderForm.value);
    }
  }
}
