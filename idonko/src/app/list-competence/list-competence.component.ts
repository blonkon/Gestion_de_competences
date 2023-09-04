import { Component, OnInit } from '@angular/core';
import { competence } from '../models/competence';
import { competence1 } from '../models/competence1';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {
  competences: competence1[] = [
    { id: 1, nom: 'Programmation en Python', categorie: 'Programmation' },
    { id: 2, nom: 'Programmation en C++', categorie: 'Programmation' },
    { id: 3, nom: 'Programmation en Java', categorie: 'Programmation' },
    { id: 4, nom: 'Programmation en POO', categorie: 'Programmation' },
    { id: 5, nom: 'Développement des scripts pour automatiser des tâches', categorie: 'Programmation' },
    { id: 6, nom: 'Conception de base de données', categorie: 'Base de données' },
    { id: 7, nom: 'Optimisation de performances', categorie: 'Base de données' },
    { id: 8, nom: 'Langages NoSQL', categorie: 'Base de données' },
    { id: 9, nom: 'Sécurité des données', categorie: 'Base de données' },
    { id: 10, nom: 'Analyse de données', categorie: 'Base de données' },
    { id: 11, nom: 'Gestion des Vulnérabilités', categorie: 'Réseaux et Sécurité' },
    { id: 12, nom: 'Pentesting', categorie: 'Réseaux et Sécurité' },
    { id: 13, nom: 'Analyse de Sécurité', categorie: 'Réseaux et Sécurité' },
    { id: 14, nom: 'Sécurité Cloud', categorie: 'Réseaux et Sécurité' },
    { id: 15, nom: 'Réseaux sans  fil', categorie: 'Réseaux et Sécurité' },
  ];

  competencesFiltrees: competence1[] = [];

  constructor() {}

  ngOnInit(): void {
    this.afficherToutesCompetences();
  }

  filterParCategorie(categorie: string) {
    this.competencesFiltrees = this.competences.filter(comp => comp.categorie === categorie);
  }
  afficherToutesCompetences() {
    this.competencesFiltrees = this.competences;
  }
}
