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

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'articles', component: ArticlesComponent },
  {path: 'resources', component: ResourcesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'profiles', component: ProfilesComponent }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
