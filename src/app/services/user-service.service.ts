import { inject, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { users } from '../../data/users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  allUsers: User[] = users;

  loggedInUser!: User;

  userAlreadyExist: boolean = false;
  loginFailed: boolean = false;

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

    this.loginFailed = false;
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
