import { map } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Profile } from '../model/profile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Profile> {

  constructor(
    private profilesService: ProfileService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('profile2--------> ');

    return this.profilesService.get(route.params['username'])
    .pipe(map(
      data => {
        console.log('profile3--------> ');
        console.log(data);
        return data;
      },
      err => {
        console.log(err);
      }
    ));


  }
}
