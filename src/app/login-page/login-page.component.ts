import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, HeaderComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  userService = inject(UserServiceService);
  // router = inject(Router)
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
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    if (this.userService.getUser()) {
      router.navigate(['/home']);
    }
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

  goToLoginPage() {
    this.router.navigate(['']);
  }
}
