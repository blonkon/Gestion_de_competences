import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Categories } from '../models/categories';
import { LocalstorageService } from '../localstorage.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { OtherUserComponent } from '../other-user/other-user.component';
import { competence } from '../models/competence';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss']
})
export class AutresComponent {
carouselData!:any[];
categories!:Categories[];
sessionid!:number;

  constructor(private router:Router,private monService: GlobalService,private localstorage : LocalstorageService,private profile :UserProfileComponent,private other : OtherUserComponent){
     this.carouselData=this.monService.carroureldata();
     this.categories=this.monService.categories;
    
  }
  
  navigateToPage(id:number){
    this.monService.use=this.localstorage.finduserByid(id);
    this.monService.comp=[];
    this.localstorage.saveData('last',id);
    
    this.router.navigate(['../other']);
  }
  onclick5(id:number){
    this.monService.carouselData2fill(id);
    this.carouselData=this.monService.carouselData2;
    this.router.navigate(['../autres']);
  }
}
