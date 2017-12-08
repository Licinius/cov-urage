import { NgModule } from '@angular/core';
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
	path: 'search',
	component: SearchJourneyComponent
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }


