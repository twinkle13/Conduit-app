import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {

      return this.userService.isAuthenticated.pipe(take(1) , map(bool => !bool));

    }
}
