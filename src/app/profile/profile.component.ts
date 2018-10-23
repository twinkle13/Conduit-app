import { ActivatedRoute } from '@angular/router';
import { UserService } from './../shared/services/user.service';
import { Profile } from './../shared/model/profile.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

    profile: Profile;
    currentUser: User;
    isUser: boolean;

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        // Load the current user's data.
        this.userService.currentUser.subscribe(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        );
      }
    );
  }
  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
