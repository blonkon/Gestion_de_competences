import { Component } from '@angular/core';
import { PopAjoutCompComponent } from './pop-ajout-comp/pop-ajout-comp.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'idonko';
  nom : string = "Ibrahim";
  profile_message : string = "Salut Mr."+this.nom+" Guindo ";
  profileImg : string = "../assets/profile.png";

}

