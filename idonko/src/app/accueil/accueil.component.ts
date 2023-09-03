import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  //id : number = this.localstorege.getData('session');

 
  //timer pour defiler 
  paragraphContent: string = 'Contenu initial';
  contents: string[] = ['Chez IDↃnko, chaque compétence devient une histoire de succès.',
  'Nous sommes honorés de vous avoir à bord et avons hâte de vous voir grandir, exceller et inspirer.', 
  'Célébrer vos réussites et identifier les domaines dans lesquels vous pouvez briller davantage.',
  'Votre voyage de développement commence ici, avec des outils sur mesure pour sculpter votre avenir.'];
  currentIndex: number = 0;

  ngOnInit() {
    this.changeContent(); // Démarre immédiatement lors du chargement
    setInterval(() => this.changeContent(), 8000); // Change le contenu toutes les 8s
    
  }

  changeContent() {
    this.paragraphContent = this.contents[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.contents.length;
  }
  constructor(private monservice : GlobalService,private localstorege : LocalstorageService,private router : Router,private app : AppComponent){
    
  }

  naturalstate(){
      if (this.localstorege.getData('session')===undefined) {
        return false;
      } else{
        return true;
      }
}
deconnecter(){
  this.localstorege.saveData('livenom','');
  this.localstorege.saveData('liveimg','assets/profile.png');
  this.app.image='assets/profile.png';
  this.app.bienvenue='';
  this.localstorege.removeData('session');
}
}
