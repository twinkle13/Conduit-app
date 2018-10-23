import { UserService } from './../shared/services/user.service';
import { User } from './../shared/model/User.model';
import { AuthService } from './../shared/services/auth.service';
import { UserLoginModel } from './../shared/model/UserLoginModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: UserLoginModel;
  constructor(
    private _auth: AuthService,
    private userService: UserService,
    private _router: Router) {
    this.userModel = new UserLoginModel();
  }

  ngOnInit() {
  }

  loginUser() {

      this.userService
    .attemptAuth('login', this.userModel)
    .subscribe(
      data => this._router.navigateByUrl('/')
    );
  }

}
