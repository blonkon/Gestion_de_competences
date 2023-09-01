
import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { user } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user : user={
    id:0,
    nom:'',
    prenom:'',
    email:'',
    telephone: 0,
    password:'',
    fonction:'',
    id_categorie:-2,
    img:'',
  };
  constructor(private localstorage : LocalstorageService, private router : Router){
    this.bienvenue=this.localstorage.getData('livenom');
    this.image=this.localstorage.getData('liveimg');
  }
  bienvenue : string ;
  image :string ;
  title = 'idonko';
  profile! : string;
  autres! : string;

   routeclickprofile(){
     if (this.localstorage.getData('session')===undefined) {
       this.router.navigate(['']);
     }else{
       this.router.navigate(['profile']);
   }
 }
 routeclickautres(){
   if (this.localstorage.getData('session')===undefined) {
     this.router.navigate(['']);
   }else{
     this.router.navigate(['autres']);
   }
 }
}
