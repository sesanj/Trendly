import { inject, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { users } from '../../data/users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  router = inject(Router);
  allUsers: User[] = users;

  loggedInUser!: User | null;

  userAlreadyExist: boolean = false;
  loginFailed: boolean = false;

  constructor() {
    this.getUserFromLocalStorage();
  }

  registerUser(user: User) {
    if (
      this.allUsers.some(
        (item) =>
          item.email == user.email || item.phoneNumber == user.phoneNumber
      )
    ) {
      this.userAlreadyExist = true;
      return;
    }

    this.allUsers.push(user);
    this.userAlreadyExist = false;

    console.log(this.allUsers);
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
    this.router.navigate(['/home']);

    this.loginFailed = false;
  }

  getUser() {
    return this.loggedInUser;
  }

  getUserFromLocalStorage() {
    let value = localStorage.getItem('trendlyUser');

    if (value) {
      this.allUsers.some((user) =>
        user.ID == JSON.parse(value) ? (this.loggedInUser = user) : null
      );
    }
  }

  logOut() {
    localStorage.removeItem('trendlyUser');
    this.loggedInUser = null;
  }

  saveUserToLocalStorage() {
    if (this.loggedInUser) {
      localStorage.setItem('trendlyUser', JSON.stringify(this.loggedInUser.ID));
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
