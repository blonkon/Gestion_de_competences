import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idonko';
  nom : string = "Ibrahim";
  profile_message : string = "Salut Mr."+this.nom+" Guindo ";
  profileImg : string = "../assets/profile.png";


}

