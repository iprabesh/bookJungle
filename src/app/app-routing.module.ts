import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscoverComponent} from './discover/discover.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import {HomePageComponent} from './home-page/home-page.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'bestseller', component: BestSellerComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'add', component: AddBookComponent}


	];

@NgModule({
  exports: [RouterModule],	
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents= [HomePageComponent, BestSellerComponent, DiscoverComponent]