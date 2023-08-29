import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
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
}
