import { Component, OnInit } from '@angular/core';
import {TrajetService} from '../trajet.service';
@Component({
	selector: 'app-search-journey',
	templateUrl: './search-journey.component.html',
	styleUrls: ['./search-journey.component.css']
})
export class SearchJourneyComponent implements OnInit {
	private message :string = "Voici tous les trajets :"
	private trajets : Object[];
	constructor(private trajetService : TrajetService) { }

	ngOnInit() {
			console.log(this.trajets);
		this.trajetService.getTrajets().subscribe(res=>this.trajets=res);
	}

}
