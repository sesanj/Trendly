import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Event} from "@angular/router";



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 public myForm: FormGroup;
  showPassword: boolean = false
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  constructor(private fb: FormBuilder) {
    // ✅ Initialize form inside constructor instead of ngOnInit()
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(10)]]
    });

  }




  onSubmit(): void {
   const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (this.myForm.valid) {
      console.log('Form Submitted:', this.myForm.value);
    }


  }
}
