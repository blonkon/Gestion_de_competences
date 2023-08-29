import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import {PopAjoutCompComponent} from '../pop-ajout-comp/pop-ajout-comp.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(private matDialog:MatDialog){}
  openAdd(){
    this.matDialog.open(PopAjoutCompComponent);
  }
  diss : string = 'display: none;'
  state : boolean = false;
  onclickpopup(){
    if (this.state===false) {
      this.diss = 'display: block;';
      this.state=true;
    }else{
      this.diss = 'display: none;';
      this.state=false;
    }
   
  }
}
