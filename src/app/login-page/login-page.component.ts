import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm:FormGroup;
  isSubmitted=false;
  error:string|null=null;

  username!: string
  password!: string


  showPassword: boolean = false
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  constructor(private fb:FormBuilder,  private router: Router) {
    this.loginForm = this.fb.group({//,Validators.pattern(/^(.+@.+\..+)?$/)
      username:['',[Validators.required]],
      password:['',[Validators.required]]

    });
  }
 onSubmit(){
    console.log("Clicked!")
   this.isSubmitted=true
    const username=this.loginForm.get('username')?.value;
     const password=this.loginForm.get('password')?.value;
    console.log(username, password)
    if(this.loginForm.invalid){
      this.error="Please enter valid information"
      return
    }

  }

  // onSubmit(){
  //   console.log("Clicked!")
  //
  //   console.log(this.username, this.password)
  //
  // }
  //


  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
