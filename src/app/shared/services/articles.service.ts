import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ArticleListConfig } from '../model/article-list-config';
import { Article } from '../model/article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }
  getArticles(): Observable<any> {
    return this.http.get('https://conduit.productionready.io/api/articles').pipe(data => data);
  }

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    // Convert any filters over to Angular's HttpParams
    let params: HttpParams = new HttpParams();
    console.log(config.filters.limit);
    Object.keys(config.filters)
    .forEach((key) => {
      params = params.set(key, config.filters[key]);
      console.log('key' + key + 'config filter ' + config.filters[key] );
    });
      console.log(config.type);
      console.log('params =>' + params.toString());
    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      params
    ).pipe(map(data => data));
  }
  getArticle(slug): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
           .pipe(map(data => data.article));
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    console.log('article -> ');
    console.log(article);
    console.log(article.slug);

    if (article.slug !== undefined) {
      console.log('here');
      console.log(article);
      return this.apiService.put('/articles/' + article.slug, {article: article})
             .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', article)
             .pipe(map(data => data.article));
    }
  }

}
