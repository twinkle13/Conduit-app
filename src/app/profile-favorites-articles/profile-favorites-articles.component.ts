import { Router, ActivatedRoute } from '@angular/router';
import { ArticleListConfig } from './../shared/model/article-list-config';
import { Profile } from './../shared/model/profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-favorites-articles',
  templateUrl: './profile-favorites-articles.component.html',
  styleUrls: ['./profile-favorites-articles.component.css']
})
export class ProfileFavoritesArticlesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  profile: Profile;
  favoritesConfig: ArticleListConfig = new ArticleListConfig();

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );
  }

}
