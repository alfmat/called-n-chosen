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

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'articles', component: ArticlesComponent },
  {path: 'resources', component: ResourcesComponent },
  {path: 'contact', component: ContactComponent },
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
        path: 'matt-sebastian',
        component: ProfilePageComponent,
        data:{id: 0}
      },
      {
        path: 'joe-zannini',
        component: ProfilePageComponent,
        data:{id: 1}
      },
      {
        path: 'bryon-herbel',
        component: ProfilePageComponent,
        data:{id: 2}
      },
      {
        path: 'terrie-baldwin',
        component: ProfilePageComponent,
        data:{id: 3}
      },
      {
        path: 'fr-martin',
        component: ProfilePageComponent,
        data:{id: 4}
      },
      {
        path: 'alfred-mathew',
        component: ProfilePageComponent,
        data:{id: 5}
      },
      {
        path: 'pam-mccausland',
        component: ProfilePageComponent,
        data:{id: 6}
      },
      {
        path: 'beth-lutz',
        component: ProfilePageComponent,
        data:{id: 7}
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
