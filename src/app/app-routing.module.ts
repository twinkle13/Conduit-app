import { NewArticleComponent } from './new-article/new-article.component';
import { CurrentUserResolverService } from './shared/services/current-user-resolver.service';
import { ProfileResolverService } from './shared/services/profile-resolver.service';
import { ProfileComponent } from './profile/profile.component';
import { ArticleResolverService } from './shared/services/article-resolver.service';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService,
      user: CurrentUserResolverService
    }

  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService,
      user: CurrentUserResolverService
    }

  },
  {
    path: 'newarticle/:slug',
    component: NewArticleComponent
  },
  {
     path: 'newarticle',
     component: NewArticleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
