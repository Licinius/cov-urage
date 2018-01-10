import { NgModule } from '@angular/core';
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';
import {AuthComponent} from './auth/auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'search/:villeD/:villeA',
		component: SearchJourneyComponent
	},
	{
		path: 'login/', 
		component: AuthComponent,
		outlet:'login'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }


