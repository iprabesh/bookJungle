import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscoverComponent} from './discover/discover.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
	{path: 'bestseller', component: BestSellerComponent}
	];

@NgModule({
  exports: [RouterModule],	
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents= [HomePageComponent, BestSellerComponent, DiscoverComponent]