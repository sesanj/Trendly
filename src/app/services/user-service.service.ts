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

  loggedInUserID!: string;
  loggedInUserRole!: string;

  userAlreadyExist: boolean = false;
  loginFailed: boolean = false;

  constructor() {
    this.getUserFromLocalStorage();

    this.httpClient
      .get<{ user: User }>(
        `http://localhost:3000/logged-user?userId=${this.loggedInUserID}`
      )
      .subscribe({
        next: (data) => {
          this.loggedInUser = data.user;
        },
      });

    this.httpClient
      .get<{ users: User[] }>(`http://localhost:3000/users`)
      .subscribe({
        next: (data) => {
          this.allUsers = data.users;
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
      .put('http://localhost:3000/add-user', { user: newUser })
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
      // console.log('Log In Failed, username/email or password does not exist');
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
    let valueRole = localStorage.getItem('trendlyUserRole');

    if (valueID && valueRole) {
      this.loggedInUserID = JSON.parse(valueID);
      this.loggedInUserRole = JSON.parse(valueRole);
    }
  }

  logOut() {
    localStorage.removeItem('trendlyUserID');
    localStorage.removeItem('trendlyUserRole');
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
      localStorage.setItem(
        'trendlyUserRole',
        JSON.stringify(this.loggedInUser.role)
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
