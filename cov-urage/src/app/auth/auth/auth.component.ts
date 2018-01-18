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


  onSubmit(){
      this.auth.authentification(this.login,this.pass).subscribe((res : any )=>{
        this.user=res;
        if(res.length!=0){
          this.auth.isLoggedIn =true;
          this.auth.mail=this.login;
        }else{
          this.logout();
        }
    });
  }

  logout(){
    this.login = "";
    this.pass ="";
    this.user = null;
  	this.auth.isLoggedIn = false;
    this.auth.mail="";
  }

}
