import { AuthService } from './shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}
  canActivate():  boolean {
      if ( this._authService.loggedIn()) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
  }
}
