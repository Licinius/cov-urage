import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  private email;
  private nom;
  private prenom;
  private telephone;
  private age;
  private mdp;
  private numero;
  private rue;
  private ville;
  private pays;
  private reponse;
  private message :string;
  constructor(public user: UserService) { }

  onSubmit() {
    var myUser = {
      email :this.email,
      nom :this.nom,
      prenom :this.prenom,
      adresse: {
        numero : this.numero,
        nom : this.rue,
        ville : this.ville,
        pays : this.pays
      },
      telephone : this.telephone,
      age : this.age,
      password :this.mdp
    };
    if(this.email == undefined || this.nom == undefined || this.prenom == undefined || this.numero==null || this.rue == undefined || this.ville == undefined || 
      this.pays ==undefined || this.mdp==undefined || this.age == null){
      this.message = "Vous n'avez pas été enregistré"
    }else{
      this.user.createUser(myUser).subscribe((res:any)=>{
        this.reponse=res;
        this.message = "Vous êtes enregistré"
      });
      
    }
  }

}
