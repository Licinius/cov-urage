import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

	constructor(private http : HttpClient) { }

	createUser(anUser:any):Observable<any []>{
		
		let url: string = 'http://localhost:8888/user/create/'+anUser.email + '/' + anUser.nom + '/' + anUser.prenom + '/' + anUser.adresse.numero 
							+ '/' + anUser.adresse.nom + '/' + anUser.adresse.ville + '/' + anUser.adresse.pays+ '/' + anUser.telephone+ '/' + anUser.age
							+ '/' + anUser.password;
		console.log(this.http.get(url));
		let url2 : string = 'http://localhost:8888/trajets/Poitiers/Toulouse'
		return this.http.get(url);
	}


}
