import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './generic/footer/footer.component';
import { ContactComponent } from './generic/contact/contact.component';
import { NavbarComponent } from './generic/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
