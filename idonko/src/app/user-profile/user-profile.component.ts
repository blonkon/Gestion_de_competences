import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { PopAjoutCompComponent } from '../pop-ajout-comp/pop-ajout-comp.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(private dialogRef: MatDialog){}

  openDialog(){
    this.dialogRef.open(PopAjoutCompComponent);
  }
}
