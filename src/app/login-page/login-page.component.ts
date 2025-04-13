import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UserServiceService } from '../services/user-service.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, HeaderComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  userService = inject(UserServiceService);
  loginForm: FormGroup;
  isSubmitted = false;
  error: string | null = null;

  username!: string;
  password!: string;

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    if (this.userService.loggedInUserID) {
      router.navigate(['/home']);
    }

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    const loginData = this.loginForm.value;
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      this.error = 'Please enter valid information';
      return;
    }

    this.userService.logIn(loginData.username, loginData.password);
  }
}
