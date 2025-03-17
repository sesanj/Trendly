import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userService = inject(UserServiceService);
  router = inject(Router);

  public myForm: FormGroup;

  showPassword: boolean = false;

  warning: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: [''],
      state: [''],
      city: [''],
      address: [''],
      postal: [''],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.registerUser();
      if (this.userService.userAlreadyExist) {
        return;
      }
      this.navigate();
      this.warning = false;
      return;
    } else {
      this.warning = true;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  registerUser() {
    const userData = this.myForm.value;

    const user: User = {
      ID: this.userService.generateUserID(),
      firstName: userData.firstname,
      lastName: userData.lastname,
      email: userData.email,
      phoneNumber: userData.phone,
      registered: true,
      role: 'CUSTOMER',
      dateRegistered: Date.now(),
      password: userData.password,
      username: userData.username,
      address: {
        country: userData.country,
        state: userData.state,
        address: userData.address,
        townCity: userData.city,
        postalCode: userData.postal,
      },
    };

    this.userService.registerUser(user);
  }

  navigate() {
    this.router.navigate(['/login']);
  }
}
