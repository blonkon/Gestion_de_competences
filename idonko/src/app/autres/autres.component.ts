import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Categories } from '../models/categories';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss']
})
export class AutresComponent {
carouselData!:any[];
categories!:Categories[];


  constructor(private router:Router,private monService: GlobalService,private localstorage : LocalstorageService){
    this.carouselData=this.monService.carroureldata();
    this.categories=this.monService.categories;
    
  }
  
  navigateToPage(){
    this.router.navigate(['../accueil']);
  }
  onclick5(id:number){
    this.monService.carouselData2fill(id);
    this.carouselData=this.monService.carouselData2;
    this.router.navigate(['../autres']);
  }
}
