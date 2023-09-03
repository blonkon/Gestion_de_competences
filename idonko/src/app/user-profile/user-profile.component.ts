import { Component, Injectable, Input, OnInit } from '@angular/core';
import { user } from '../models/user';
import { competence } from '../models/competence';
import { LocalstorageService } from '../localstorage.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  comp1!: competence[] ;
  user1: user=this.localstorage.finduserByid(this.localstorage.getData('session'));;
  nouvelleCompetence: any;

  constructor(private localstorage : LocalstorageService){
    this.comp1=[]
    for (const iterator of this.localstorage.getData('competences')) {
      if (iterator.id_user===this.localstorage.getData('session')) {
        this.comp1.push(iterator);
      }
    }
  }

  ngOnInit(): void {
  }
  fullcomp(id : number){
    for (const iterator of this.localstorage.getData('competences')) {
      if (iterator.id_user===id) {
        this.comp1.push(iterator);
      }
    }
  }

  }

