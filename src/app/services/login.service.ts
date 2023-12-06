import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(email: string, password: string) {
    //backend api
    //as this is just a clone project we are not connecting backend
    //in real project we will get a token from backend which will be stored in localStorage
    localStorage.setItem('token', Math.random() + '');
  }
}
