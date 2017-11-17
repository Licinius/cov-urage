import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-display-journey',
	templateUrl: './display-journey.component.html',
	styleUrls: ['./display-journey.component.css']
})
export class DisplayJourneyComponent implements OnInit {
	private message :string = "Voici tous les trajets :"
	constructor() { }

	ngOnInit() {
	}

	private trajets : Object[] 
	=[
		{
			"conducteur" : "anita.bath@yopmail.com",
			"date" : {
				"jour" : 10,
				"mois" : 10,
				"année" : 2017
			},
			"place" : 4,
			"participant" : ["yuri.nator@yopmail.com","maya.normousbutt@yopmail.com"],
			"distance" : 431,
			"temps_moyen": 270,
			"depart" : {
				"numero" : 23,
				"nom" : "Rue du Pigeon Blanc",
				"ville" : "Poitiers",
				"pays" : "France"

			},
			"arrive" :{
				"numero" :4,
				"nom" : "Rue du Canard",
				"ville" : "Toulouse",
				"pays" : "France"
			},
			"voiture": {
				"marque" : "Toyata",
				"modele" : "Yaris",
				"couleur" : "rouge"
			},
			"prix":42
		},
		{
			"conducteur" : "yuri.nator@yopmail.com",
			"date" : {
				"jour" : 17,
				"mois" : 11,
				"année" : 2017
			},
			"place" : 1,
			"participant" : ["maya.normousbutt@yopmail.com"],
			"distance" : 13355,
			"temps_moyen": 7980,
			"depart" : {
				"numero" : 23,
				"nom" : "R. do Ouro",
				"ville" : "Lisbonne",
				"pays" : "Portugal"

			},
			"arrive" :{
				"numero" : 1,
				"nom" : "Place de l'idéal Nord Coréen",
				"ville" : "Pyongyang",
				"pays" : "Corée du Nord"
			},
			"voiture": {
				"marque" : "Reliant",
				"modele" : "Robin",
				"couleur" : "Jaune or"
			},
			"prix":1335
		},
		{
			"conducteur" : "judas.nanas@yopmail.com",
			"date" : {
				"jour" : 24,
				"mois" : 12,
				"année" : 2017
			},
			"place" : 3,
			"participant" : ["yuri.nator@yopmail.com","maya.normousbutt@yopmail.com"],
			"distance" : 3,
			"temps_moyen": 6,
			"depart" : {
				"numero" : 1,
				"nom" : "Place de l'idéal Nord Coréen",
				"ville" : "Pyongyang",
				"pays" : "Corée du Nord"

			},
			"arrive" :{
				"numero" : 1,
				"nom" : "Place Kim Il-sung",
				"ville" : "Pyongyang",
				"pays" : "Corée du Nord"
			},
			"voiture": {
				"marque" : "Renault",
				"modele" : "2CV",
				"couleur" : "Verte Pomme"
			},
			"prix":0.50
		}
	]
}
