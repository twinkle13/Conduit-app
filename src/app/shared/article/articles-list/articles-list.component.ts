import { Article } from './../../model/article.model';
import { ArticleListConfig } from './../../model/article-list-config';
import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService
  ) { }

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }
  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    console.log('page number' + this.currentPage);
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];
    console.log('loading' + this.loading );
    console.log('limit' + this.limit);


    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
      console.log('query' + this.query.filters.limit );
    }

    this.articlesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.articles;
      console.log( 'results' + data.articles);

      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });
  }
  ngOnInit() {
  }

}
