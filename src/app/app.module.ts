import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

import { AppRoutingModule, routingComponents} from './app-routing.module';

import { BooklistService } from './booklist.service';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import { HomePageComponent } from './home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent, 
    DescriptionsComponent,
    routingComponents,
    AddBookComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
