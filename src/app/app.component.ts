import { Component, inject } from '@angular/core';
import { ProductServiceService } from './product service/product-service.service';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from "./register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
