import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BestSellerComponent } from './best-seller/best-seller.component';

import { BooklistService } from './booklist.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    BestSellerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
