import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;
	constructor(private http: HttpClient) {}

	authentification(login,password): Observable<any []>{
		let url: string = "http://localhost:8888/auth/login="+login + "/password=" +password;
		console.log("Authentification service : " + url);
		return this.http.get(url);
	}

}
