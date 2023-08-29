import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss']
})
export class AutresComponent {
    carouselData = [
      [
        { name: 'Alice', role: 'Développeuse Web',img:'../../assets/profile.png' },
        { name: 'Bob', role: 'Designer UI/UX',img:'../../assets/profilee.jpg' },
        { name: 'Charlie', role: 'Ingénieur DevOps' ,img:'../../assets/profile.png'}
      ],
      [
        { name: 'Eva', role: 'Analyste de Données' ,img:'../../assets/profile.png'},
        { name: 'Frank', role: 'Développeur Front-End',img:'../../assets/profile.png' },
        { name: 'Grace', role: 'Développeuse Back-End' ,img:'../../assets/profile.png'}
      ],
      [
        { name: 'Henry', role: 'Scrum Master' ,img:'../../assets/profile.png'},
        { name: 'Isabel', role: 'Architecte Logiciel',img:'../../assets/profile.png' },
        { name: 'Jack', role: 'Spécialiste en Sécurité' ,img:'../../assets/profile.png'}
      ],
      [
        { name: 'Kate', role: 'Développeuse Full Stack' ,img:'../../assets/profile.png'},
        { name: 'Liam', role: 'Analyste QA' ,img:'../../assets/profilee.jpg'},
        { name: 'Mia', role: 'Développeuse Mobile',img:'../../assets/profilee.jpg' }
      ],
      [
        { name: 'Noah', role: 'Ingénieur Cloud',img:'../../assets/profilee.jpg' },
        { name: 'Olivia', role: 'Développeuse Front-End' ,img:'../../assets/profilee.jpg'},
        { name: 'Peter', role: 'Développeur Back-End',img:'../../assets/profilee.jpg' }
      ],
      [
        { name: 'Quinn', role: 'Développeuse Web' ,img:'../../assets/profilee.jpg'},
        { name: 'Ryan', role: 'Designer UI/UX',img:'../../assets/profilee.jpg' },
        { name: 'Sophia', role: 'Ingénieure DevOps' ,img:'../../assets/profilee.jpg'}
      ],
      [
        { name: 'Thomas', role: 'Analyste de Données',img:'../../assets/profilee.jpg' },
        { name: 'Uma', role: 'Développeuse Front-End' ,img:'../../assets/profilee.jpg'},
        { name: 'Victor', role: 'Développeur Back-End' ,img:'../../assets/profilee.jpg'}
      ],
      [
        { name: 'Willa', role: 'Scrum Master' ,img:'../../assets/profile.png'},
        { name: 'Xander', role: 'Architecte Logiciel',img:'../../assets/profile.png' },
        { name: 'Yara', role: 'Spécialiste en Sécurité',img:'../../assets/profile.png' }
      ],
      [
        { name: 'Zoe', role: 'Développeuse Full Stack',img:'../../assets/profile.png' },
        { name: 'Aaron', role: 'Analyste QA',img:'../../assets/profile.png' },
        { name: 'Bella', role: 'Développeuse Mobile',img:'../../assets/profile.png' }
      ],
      [
        { name: 'Caleb', role: 'Ingénieur Cloud' ,img:'../../assets/profilee.jpg'},
        { name: 'Daisy', role: 'Développeuse Front-End',img:'../../assets/profilee.jpg' },
        { name: 'Ethan', role: 'Développeur Back-End' ,img:'../../assets/profilee.jpg'}
      ]
  ];

  categories : string[] = [
    'Développement Web'
    ,'Développement Backend' ,
    'Base de données','Sécurité informatique',
     'IA', 
     'Développement Mobile',
       'Réseaux' , 
    'DevOps',  'Gestion de Projet Informatique',
    'Designer','Machine learning','Formateur',
  ];

  constructor(private router:Router){}
  navigateToPage(){
    this.router.navigate(['../accueil']);
  }
}
