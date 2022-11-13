import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { BookRoutingModule } from './book/book-routing.module';
import { EditorialRoutingModule } from './editorial/editorial-routing.module';
import { AuthorRoutingModule } from './author/author-routing.module';
import { AuthorModule } from './author/author.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    AuthorModule,
    EditorialModule,
    HttpClientModule,
    BookRoutingModule,
    AuthorRoutingModule,
    EditorialRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
