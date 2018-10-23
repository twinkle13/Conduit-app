import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeAuthResolerService implements Resolve<boolean> {

  constructor(
    private router: Router,
    private userService: UserService) { }

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {

      return this.userService.isAuthenticated.pipe(take(1));

    }
}
