import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './generic/footer/footer.component';
import { ContactComponent } from './generic/contact/contact.component';
import { NavbarComponent } from './generic/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleBoxComponent } from './pages/articles/article-box/article-box.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { IndivProfileComponent } from './pages/profiles/indiv-profile/indiv-profile.component';
import { ProfilePageComponent } from './pages/profiles/profile-page/profile-page.component';
import { AllProfilesComponent } from './pages/profiles/all-profiles/all-profiles.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PROFILES } from './pages/profiles/profile-db';
import { Profile } from './pages/profiles/Profile';
import { ARTICLES } from './pages/articles/article-text';
import { Article } from './pages/articles/Article';
import { AllArticlesComponent } from './pages/articles/all-articles/all-articles.component';
import { IndivArticleComponent } from './pages/articles/indiv-article/indiv-article.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

const profiles: Profile[] = PROFILES;
const articles: Article[] = ARTICLES;

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/maintenance'},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: AllArticlesComponent
      },
      {
        path: articles[0].route,
        component: IndivArticleComponent,
        data:{id: 0}
      },
      {
        path: articles[1].route,
        component: IndivArticleComponent,
        data:{id: 1}
      },
      {
        path: articles[2].route,
        component: IndivArticleComponent,
        data:{id: 2}
      },
      {
        path: articles[3].route,
        component: IndivArticleComponent,
        data:{id: 3}
      },
      {
        path: articles[4].route,
        component: IndivArticleComponent,
        data:{id: 4}
      },
      {
        path: articles[5].route,
        component: IndivArticleComponent,
        data:{id: 5}
      }
    ]
  },
  {path: 'resources', component: ResourcesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'workshops', component: WorkshopsComponent },
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: AllProfilesComponent
      },
      {
        path: profiles[0].user,
        component: ProfilePageComponent,
        data:{id: 0}
      },
      {
        path: profiles[1].user,
        component: ProfilePageComponent,
        data:{id: 1}
      },
      {
        path: profiles[2].user,
        component: ProfilePageComponent,
        data:{id: 2}
      },
      {
        path: profiles[3].user,
        component: ProfilePageComponent,
        data:{id: 3}
      },
      {
        path: profiles[4].user,
        component: ProfilePageComponent,
        data:{id: 4}
      },
      {
        path: profiles[5].user,
        component: ProfilePageComponent,
        data:{id: 5}
      },
      {
        path: profiles[6].user,
        component: ProfilePageComponent,
        data:{id: 6}
      }
    ]
  },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ResourcesComponent,
    ArticlesComponent,
    ArticleBoxComponent,
    ProfilesComponent,
    IndivProfileComponent,
    ProfilePageComponent,
    AllProfilesComponent,
    NotFoundComponent,
    AllArticlesComponent,
    IndivArticleComponent,
    WorkshopsComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
