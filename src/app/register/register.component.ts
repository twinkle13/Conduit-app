import { UserService } from './../shared/services/user.service';
import { AuthService } from './../shared/services/auth.service';
import { UserRegisterModel } from './../shared/model/userRegisterModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  userModel: UserRegisterModel;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private userService: UserService) {
    this.userModel = new UserRegisterModel();
  }

  registerUser() {
     this.userService
    .attemptAuth('register', this.userModel)
    .subscribe(
      data => this._router.navigateByUrl('/')
    );
  }

  ngOnInit() {
  }

}
