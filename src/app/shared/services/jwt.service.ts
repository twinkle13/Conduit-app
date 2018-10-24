import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  getToken(): string {
    return window.localStorage['token'];
  }
  getUsername(): string {
    return window.localStorage['username'];
  }

  saveToken(token: string) {
    window.localStorage['token'] = token;
  }
  saveUsername(username: string) {
    window.localStorage['username'] = username;
  }

  destroyToken() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
  }
}
