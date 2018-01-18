import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TrajetService {

	constructor(private http : HttpClient) { }

	getTrajets(parametres: string):Observable <any>{
		let url: string = "http://localhost:8888/trajets/" + parametres;
		return this.http.get(url);
	}

	addUser(parametres: string):Observable <any>{
		let url: string = "http://localhost:8888/addUser/" + parametres;
		console.log(url);
		return this.http.get(url);
	}
}
