import { Component, OnInit } from '@angular/core';
import {TrajetService} from '../trajet.service';
@Component({
	selector: 'app-display-journey',
	templateUrl: './display-journey.component.html',
	styleUrls: ['./display-journey.component.css']
})
export class DisplayJourneyComponent implements OnInit {
	private message :string = "Voici tous les trajets :"
	private trajets : Object[];
	constructor(private trajetService : TrajetService) { }

	ngOnInit() {
		this.trajetService.getTrajets().subscribe(res=>this.trajets=res);
	}


}
