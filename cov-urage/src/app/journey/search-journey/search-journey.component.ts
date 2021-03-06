import { Component, OnInit } from '@angular/core';
import {TrajetService} from '../trajet.service';
import {Params, ActivatedRoute} from '@angular/router'
import {AuthGuardService} from '../../auth-guard.service';
@Component({
	selector: 'app-search-journey',
	templateUrl: './search-journey.component.html',
	styleUrls: ['./search-journey.component.css']
})
export class SearchJourneyComponent implements OnInit {
	private trajets : Object[];
	private subscribe : any;

	constructor(private logGuard: AuthGuardService,private trajetService : TrajetService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe((params : Params)=> {
			let subroute:string;
			let strDate:string;
			if(params['date']==="undefined" || params['date']===""){
				strDate = "*/*/*";
			}else{
				let date = new Date(params['date']);
				strDate = date.getDate() + "/" + (date.getMonth()+1) + "/" +date.getFullYear();
			}
			subroute = params['villeD']+"/" + params['villeA']+"/"+strDate;
			this.trajetService.getTrajets(subroute).subscribe(res=>this.trajets=res);
			
		});
	}

}
