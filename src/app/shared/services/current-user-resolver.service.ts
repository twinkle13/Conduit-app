import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './../model/User.model';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolverService implements Resolve<User> {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('user--------> ');

    return this.userService.getCurrentUser()
    .pipe(map(
      data => {
        console.log('user3--------> ');
        console.log(data);
        return data;
      },
      err => {
        console.log(err);
      }
    ));
}
}
