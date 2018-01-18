import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../auth-guard.service';
import {TrajetService} from '../trajet.service';
import {Params, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private mail: string;
  private isValid:boolean;
  constructor(private logGuard: AuthGuardService, private trajetService : TrajetService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.mail = this.logGuard.getMail();
  	this.route.params.subscribe((params : Params)=> {
  		let id = params["idVoyage"];
  		let subroute = id + "/" + this.mail;
  		console.log(subroute);
  		this.trajetService.addUser(subroute).subscribe((res : any )=>{
  			if(res.length!=0){
  				this.isValid=true;
  			}else{
  				this.isValid=false;
  			}
  		});
  	});
  }	

}
