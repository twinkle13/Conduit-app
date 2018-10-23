import { User } from './../model/User.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }

  registerUser(user) {
    console.log('user' + user);
    return this.http.post('https://conduit.productionready.io/api/users',
    {'user': user}).pipe(map(data => data));
  }
  loginUser(user) {
   // console.log('user' + user);
    return this.http.post('https://conduit.productionready.io/api/users/login',
    {'user': user}).pipe(map(data => data));
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    console.log('logged in');
    return !!localStorage.getItem('token');
  }
}
