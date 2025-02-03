import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Routes} from "@angular/router";
import {LoginComponent} from "./app/login/login.component";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
