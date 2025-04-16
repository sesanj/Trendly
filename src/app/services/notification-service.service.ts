import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  isNotified = false;
  imageUrl: string = '';
  text: string = '';

  constructor() {}

  notify(image: string, text: string) {
    this.setNotification(image, text);
    this.isNotified = true;

    setTimeout(() => {
      this.isNotified = false;
    }, 4000);
  }

  setNotification(image: string, text: string) {
    this.imageUrl = image;
    this.text = text;
  }
}
