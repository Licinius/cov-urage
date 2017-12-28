import { Component, OnInit } from '@angular/core';
import {TrajetService} from '../trajet.service';
import {Params, ActivatedRoute} from '@angular/router'
@Component({
	selector: 'app-search-journey',
	templateUrl: './search-journey.component.html',
	styleUrls: ['./search-journey.component.css']
})
export class SearchJourneyComponent implements OnInit {
	private trajets : Object[];
	private subscribe : any;

	constructor(private trajetService : TrajetService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe((params : Params)=> {
			let subroute ="";
			subroute = params['villeD']+"/" + params['villeA'];
			this.trajetService.getTrajets(subroute).subscribe(res=>this.trajets=res);
			
		});
	}

}
