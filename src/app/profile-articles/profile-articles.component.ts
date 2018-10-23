import { Router, ActivatedRoute } from '@angular/router';
import { ArticleListConfig } from './../shared/model/article-list-config';
import { Profile } from './../shared/model/profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styleUrls: ['./profile-articles.component.css']
})
export class ProfileArticlesComponent implements OnInit {
  profile: Profile;
  articlesConfig: ArticleListConfig = new ArticleListConfig();
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.articlesConfig = new ArticleListConfig(); // Only method I found to refresh article load on swap
        this.articlesConfig.filters.author = this.profile.username;
      }
    );
  }

}
