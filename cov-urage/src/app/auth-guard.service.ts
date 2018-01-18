import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
	constructor(public authService: AuthService, public router :Router){}
	canActivate(){
		if (this.authService.isLoggedIn){
			return true;
		}
		return false;
	}
}
