import { Component, inject } from '@angular/core';
import { ProductServiceService } from './product service/product-service.service';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
