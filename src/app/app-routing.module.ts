import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscoverComponent} from './discover/discover.component';

const routes: Routes = [
	{path: 'discover', component: DiscoverComponent}
	];

@NgModule({
  exports: [RouterModule],	
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
