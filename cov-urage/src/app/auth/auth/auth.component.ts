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
        console.log(res);
        if(res.length!=0){
          console.log("Ok");
          this.auth.isLoggedIn =true;
        }else{
          console.log("Nope");
          this.logout();
        }
    });
  }

  logout(){
    this.login = "";
    this.pass ="";
    this.user = null;
  	this.auth.isLoggedIn = false;
  }

}
