import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  isSubmitted=false;
  error:string|null=null;



  constructor(private fb:FormBuilder,  private router: Router) {
    this.loginForm = this.fb.group({
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]

    });
  }
  username=this.loginForm.get('username')?.value;
  password=this.loginForm.get('password')?.value;
  onSubmit():void{
    this.isSubmitted=true
    console.log(this.username,this.password)
    if(this.loginForm.invalid){
      this.error="Please enter valid information"
      return
    }
  }



  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
