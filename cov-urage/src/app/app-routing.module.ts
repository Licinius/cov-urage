import { NgModule } from '@angular/core';
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthComponent} from './auth/auth/auth.component';
import {AddUserComponent} from './journey/add-user/add-user.component';
import {InscriptionComponent} from './user/inscription/inscription.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'search/:villeD/:villeA/:date',
		component: SearchJourneyComponent,
		canActivate: [AuthGuardService]
	},
	{
		path:'addUser/:idVoyage',
		component:AddUserComponent,
		canActivate: [AuthGuardService]
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }


