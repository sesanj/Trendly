import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";

import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {LoginPageComponent} from "./app/login-page/login-page.component";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},

];
