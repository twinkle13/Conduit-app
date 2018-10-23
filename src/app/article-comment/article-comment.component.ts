import { UserService } from './../shared/services/user.service';
import { Component, OnInit, EventEmitter, Input, Output, } from '@angular/core';
import { User } from '../shared/model/User.model';
import { Comment } from '../shared/model/Comment.model';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css']
})
export class ArticleCommentComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    );
  }
  deleteClicked() {
    this.deleteComment.emit(true);
  }

}
