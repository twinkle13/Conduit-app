import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from './../shared/services/articles.service';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { Article } from './../shared/model/article.model';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
class ArticleReq {
  constructor(public title?: string,
    public description?: string,
    public body?: string,
    public tagList?: Array<string>) {}
}
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})

export class NewArticleComponent implements OnInit {
  article: Article;
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;
  slug: string;
  obj: ArticleReq ;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) {
     }

     ngOnInit() {
      // If there's an article prefetched, load it
      this.slug = this.route.snapshot.params['slug'];
      this.obj = new ArticleReq();
      console.log(this.slug);

      this.route.data.subscribe(
        (data: { article: Article }) => {
          console.log( 'data.article' + data );
          this.article = data.article;
          console.log(this.article);
        }
      );


    }


    submitForm( articleForm: NgForm) {

      this.slug = this.route.snapshot.params['slug'];
      if ( this.slug === undefined) {
   this.obj = {
        title: articleForm.value.title,
        description: articleForm.value.description,
        body: articleForm.value.body,
        tagList: articleForm.value.tagsList.split(' ')

    };
    console.log(this.obj);
    this.articlesService.save({article: this.obj})
      .subscribe(
        data =>  {
          console.log(data);
          this.router.navigateByUrl('/');
        }
      ); }  else {
      this.articlesService.save(this.article)
      .subscribe(
        data =>  {
          console.log(data);
          this.router.navigateByUrl('/');
        }
      );
    }

    }

}
