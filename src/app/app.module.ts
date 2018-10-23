import { ProfileResolverService } from './shared/services/profile-resolver.service';
import { ArticleResolverService } from './shared/services/article-resolver.service';

import { AuthGuard } from './auth.guard';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from './shared/article/articles-list/articles-list.component';
import { ArticleMetaComponent } from './shared/article/article-meta/article-meta.component';
import { ArticlePreviewComponent } from './shared/article/article-preview/article-preview.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFavoritesArticlesComponent } from './profile-favorites-articles/profile-favorites-articles.component';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    ArticlesListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ArticleComponent,
    ArticleCommentComponent,
    ProfileComponent,
    ProfileFavoritesArticlesComponent,
    ProfileArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService ,
    UserService,
    AuthGuard,
    ArticleResolverService,
    ProfileResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
