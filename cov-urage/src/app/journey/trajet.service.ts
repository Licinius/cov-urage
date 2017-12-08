import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TrajetService {

	constructor(private http : HttpClient) { }

	getTrajets():Observable <any>{
		return this.http.get("http://localhost:8888/trajets");
	}


}
