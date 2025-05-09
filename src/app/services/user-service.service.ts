import { inject, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { users } from '../../data/users';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/product-order.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  httpClient = inject(HttpClient);
  router = inject(Router);
  allUsers: User[] = [];

  loggedInUser!: User | null;

  isLoading: boolean = true;

  loggedInUserID!: string;
  loggedInUserRole!: string;

  userAlreadyExist: boolean = false;
  loginFailed: boolean = false;

  constructor() {
    this.getUserFromLocalStorage();

    this.httpClient
      .get<{ user: User }>(
        `https://trendly-backend-cme7.onrender.com/logged-user?userId=${this.loggedInUserID}`
      )
      .subscribe({
        next: (data) => {
          this.loggedInUser = data.user;
        },
        complete: () => {
          this.loggedInUserRole = this.loggedInUser?.role!;
          this.isLoading = false;
        },
      });

    this.httpClient
      .get<{ users: User[] }>(`https://trendly-backend-cme7.onrender.com/users`)
      .subscribe({
        next: (data) => {
          this.allUsers = data.users;

          this.isLoading = false;
        },
      });
  }

  registerUser(user: User) {
    if (
      this.allUsers.some(
        (item) =>
          (item.email == user.email && item.registered) ||
          (item.phoneNumber == user.phoneNumber && item.registered)
      )
    ) {
      this.userAlreadyExist = true;
      return;
    }

    this.allUsers.push(user);
    this.addUserToDatabase(user);
    this.userAlreadyExist = false;
  }

  addUserToDatabase(newUser: User) {
    this.httpClient
      .put('https://trendly-backend-cme7.onrender.com/add-user', {
        user: newUser,
      })
      .subscribe();
  }

  logIn(emailOrUsername: string, password: string) {
    if (
      !this.allUsers.some(
        (item) =>
          (item.email.toLowerCase() == emailOrUsername.toLowerCase() &&
            item.password == password) ||
          (item.username.toLowerCase() == emailOrUsername.toLowerCase() &&
            item.password == password)
      )
    ) {
      this.loginFailed = true;
      return;
    }

    this.allUsers.forEach((item) =>
      (item.email.toLowerCase() == emailOrUsername.toLowerCase() &&
        item.password == password) ||
      (item.username.toLowerCase() == emailOrUsername.toLowerCase() &&
        item.password == password)
        ? (this.loggedInUser = item)
        : ''
    );
    this.saveUserToLocalStorage();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });

    this.loginFailed = false;
  }

  getUser() {
    return this.loggedInUser;
  }

  getUserFromLocalStorage() {
    let valueID = localStorage.getItem('trendlyUserID');

    if (valueID) {
      this.loggedInUserID = JSON.parse(valueID);

      return JSON.parse(valueID);
    }
  }

  logOut() {
    localStorage.removeItem('trendlyUserID');
    this.loggedInUser = null;

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  saveUserToLocalStorage() {
    if (this.loggedInUser) {
      localStorage.setItem(
        'trendlyUserID',
        JSON.stringify(this.loggedInUser.ID)
      );
    }
  }

  generateUserID() {
    let orderID: string = '';
    let letters: string[] = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    for (let i = 0; i < 2; i++) {
      orderID += this.randomNumber();
      orderID += letters[this.randomNumber()];
    }

    return orderID;
  }

  randomNumber() {
    return Math.floor(Math.random() * (25 - 0 + 1)) + 0;
  }
}
