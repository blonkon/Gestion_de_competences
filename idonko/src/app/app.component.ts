import { Component, OnInit } from '@angular/core';
import { PopAjoutCompComponent } from './pop-ajout-comp/pop-ajout-comp.component';
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
  bienvenue! : string;
  constructor(private localstorage : LocalstorageService, private router : Router){
    this.user = this.localstorage.finduserByid(this.localstorage.getData('session'));
    this.bienvenue = 'Salut Mr. '+this.user.nom
  }
  user! : user;
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
