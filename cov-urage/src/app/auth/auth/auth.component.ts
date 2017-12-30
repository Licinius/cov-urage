import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  private login: string;
  private pass: string;
  private user;
  constructor(public auth: AuthService) { }


  checkIdentification(login,password){

    this.auth.authentification(login,password).subscribe(res=>this.user=res);
    return this.user!=undefined;
  }
  onSubmit(){
  	if(this.checkIdentification(this.login,this.pass)){
      console.log("Ok");
  	 this.auth.isLoggedIn =true;
    }else{
      console.log("Nope");
      this.auth.isLoggedIn = false;
      this.login = "";
      this.pass ="";
      this.user = null;
    }
  }

  logout(){
    this.login = "";
    this.pass ="";
    this.user = null;
  	this.auth.isLoggedIn = false;
  }

}
