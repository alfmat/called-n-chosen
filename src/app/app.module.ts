import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './generic/footer/footer.component';
import { ContactComponent } from './generic/contact/contact.component';
import { NavbarComponent } from './generic/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
