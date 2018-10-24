import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../model/User.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  loggedIn: boolean;
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      console.log('úsername : ----' + this.userService.getUsername() + '    ' + this.userService.getToken());
      this.ifLoggedIn();

  }
  ifLoggedIn()  {
    if ( window.localStorage['token']) {
      this.username = this.userService.getUsername();
      return true;
    } else {
      return false;
    }
  }

}
