import { Component } from '@angular/core';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss']
})
export class AutresComponent {
  categories : string[] = [
    'Développement Web'
    ,'Développement Backend' ,
    'Base de données','Sécurité informatique',
     'IA', 
     'Développement Mobile',
       'Réseaux' , 
    //'DevOps',  'Gestion de Projet Informatique',
    // 'Designer','Machine learning','Formateur',
  ];
}
