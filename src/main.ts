import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { IMAGE_CONFIG } from '@angular/common';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { ShopComponent } from './app/shop/shop.component';
import { Component } from '@angular/core';
import { HomeComponent } from './app/home/home.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

const appConfig = {
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
