import { AuthService } from './../shared/services/auth.service';
import { TagsService } from './../shared/services/tags.service';
import { Router } from '@angular/router';
import { ArticleListConfig } from './../shared/model/article-list-config';
import { ArticlesService } from './../shared/services/articles.service';
import { Article } from './../shared/model/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  listConfig: ArticleListConfig = new ArticleListConfig();
  isAuthenticated: boolean;
  tags: Array<string> = [];
  tagsLoaded = false;

  constructor(
    private _articleService: ArticlesService,
    private router: Router,
    private tagsService: TagsService,
    private _auth: AuthService
    ) { }

  ngOnInit() {
    this._articleService.getArticles()
      .subscribe(data => {
        this.articles = data.articles;
      });
      if ( this._auth.loggedIn()) {
        this.setListTo('feed');
      } else {
        this.setListTo('all');
      }

      this.tagsService.getTags()
      .subscribe(tags => {
        this.tags = tags;
        this.tagsLoaded = true;
      });

  }
  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login

    if (type === 'feed' && !this._auth.loggedIn()) {
      this.router.navigateByUrl('/login');
      return;
    }


    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
    console.log('listconfig' + this.listConfig.filters );
  }
}
