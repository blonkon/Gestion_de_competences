import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  nom ='';
  prenom :string="";
  email :string="";
  password:string="";
  adduser(form : NgForm){
    const nomy  = this.nom;
    console.log(nomy);
  }
}
