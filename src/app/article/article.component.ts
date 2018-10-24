import { UserService } from './../shared/services/user.service';
import { CommentsService } from './../shared/services/comments.service';
import { ArticlesService } from './../shared/services/articles.service';
import { Article } from './../shared/model/article.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User.model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
        this.populateComments();
      }
    ); /*
    this.articlesService.getArticle(this.route.snapshot.url[1].path)
    .subscribe((data: Article) => {
      this.article = data;
      this.populateComments();
    }); */

      this.userService.currentUser.subscribe(
        (userData: User) => {
          this.currentUser = userData;
          this.canModify = (this.currentUser.username === this.article.author.username);
        }
      );
      this.route.data.subscribe(
      (data: any) => {
        this.currentUser = data.user.user;
        console.log( data);
        console.log(this.currentUser.username + '===' + this.article.author.username);
        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }
  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }
  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    console.log('entered method' + this.article.slug);
    this.commentsService.getComments(this.article.slug)
      .subscribe(comments => {
        this.comments = comments;
        console.log(comments.toString());
      });
  }
  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.article.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        }
      );
  }
  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.article.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }

}
