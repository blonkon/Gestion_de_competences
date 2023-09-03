import { Component, Injectable, OnInit } from '@angular/core';
import { competence } from '../models/competence';
import { user } from '../models/user';
import { LocalstorageService } from '../localstorage.service';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.component.html',
  styleUrls: ['./other-user.component.scss']
})
export class OtherUserComponent {

  comp1: competence[] =this.monservice.comp;;
  user1: user =this.monservice.use;
  nouvelleCompetence: any;

  constructor(private localstorage : LocalstorageService , private monservice :GlobalService){
    this.user1=this.monservice.use;
    this.user1 = this.localstorage.finduserByid(this.localstorage.getData('last'))
    for (const iterator of this.localstorage.getData('competences')) {
      if (iterator.id_user===this.user1.id) {
        this.comp1.push(iterator)
      }
    }
    //  
  }
 
}