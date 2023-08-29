import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  nom : string="";
  prenom :string="";
  email :string="";
  password:string="";
  nomy : string="";
  adduser(){
    this.nomy = this.nom;
  }
}
