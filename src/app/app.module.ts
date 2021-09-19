import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { GotService } from './got.service';
import { GotHttpService } from './got-http.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookDetailsComponent,
    CharDetailsComponent,
    HouseDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path: 'about', component: AboutComponent},
      {path: 'book/:name',component : BookDetailsComponent},
      {path: 'char/:url',component : CharDetailsComponent},
      {path: 'house/:name',component : HouseDetailsComponent}
    ])
  ],
  providers: [GotService,GotHttpService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
