import { Component, Input, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { user } from '../models/user';
import { competence } from '../models/competence';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  comp1: competence[] = [];
  user1: user[]=[];
  nouvelleCompetence: any;

  constructor(){

  }

  ngOnInit(): void {
    this.comp1=[
      { id:1, nom: 'Compétence 1', niveau: 20},
      { id:2, nom: 'Compétence 1', niveau: 30},
      { id:3, nom: 'Compétence 1', niveau: 40},
      { id:4, nom: 'Compétence 1', niveau: 50},
      { id:5, nom: 'Compétence 1', niveau: 60},
      { id:6, nom: 'Compétence 1', niveau: 75},
      { id:7, nom: 'Compétence 1', niveau: 77},
      { id:8, nom: 'Compétence 1', niveau: 20},
      { id:9, nom: 'Compétence 1', niveau: 80},
      { id:10, nom: 'Compétence 1', niveau: 80},
      { id:11, nom: 'Compétence 1', niveau: 80},
      { id:12, nom: 'Compétence 1', niveau: 80},
      { id:13, nom: 'Compétence 1', niveau: 80},
      { id:14, nom: 'Compétence 1', niveau: 80},
      { id:15, nom: 'Compétence 1', niveau: 80},
      { id:16, nom: 'Compétence 1', niveau: 80},
      { id:17, nom: 'Compétence 1', niveau: 80},
      { id:18, nom: 'Compétence 1', niveau: 80},
      { id:19, nom: 'Compétence 1', niveau: 80},
      { id:20, nom: 'Compétence 1', niveau: 80},
      { id:21, nom: 'Compétence 1', niveau: 80},
    ];
    this.user1=[
      {
      id:1, 
      nom:'Guindo', 
      prenom:'Ibrahima', 
      email:'ib@gmail.com', 
      telephone: 94410809,
      metier:'Développeur full stack'
    }
  ]
  }

  // ajouterCompetence(competence: competence): void {
  //   if(competence.nom && competence.niveau){
  //     const nouvelId = this.comp1.length+1;
  //     const nouvelleCompetence : competence = {
  //       nom: competence.nom,
  //       niveau: competence.niveau,
  //       id: nouvelId,
  //     };
  //    this.comp1.push(nouvelleCompetence);
  //   }
  // }
  ajouterCompetence(): void {
    if(this.nouvelleCompetence.nom && this.nouvelleCompetence.niveau){
      const nouvelId = this.comp1.length+1;
      const nouvelleCompetence : competence = {
        nom: this.nouvelleCompetence.nom,
        niveau: this.nouvelleCompetence.niveau,
        id: nouvelId,
      };
     this.comp1.push(nouvelleCompetence);
     this.nouvelleCompetence = {id:0, nom:'', niveau:''};
    }
  }

}
