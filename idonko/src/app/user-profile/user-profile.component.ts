import { Component, Injectable, Input, OnInit } from '@angular/core';
import { user } from '../models/user';
import { competence } from '../models/competence';
import { LocalstorageService } from '../localstorage.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgForm } from '@angular/forms';

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
  user1: user=this.localstorage.finduserByid(this.localstorage.getData('session'));
  nouvelleCompetence: any;
  newusers : user[]=[];
  newusers2 : user[]=[];
  nnom!:string;
  nprenom!:string;
  nemail!:string;
  ntel!:string;
  nfonction!:string;
  npassword!:string;
  cpassword!:string;
  ncategorie!:number;
  categories! : any[];
  invalid!:string;
  redirection:boolean=false;
  userchange :user={
    id:0,
    nom:'',
    prenom:'',
    email: '',
    telephone: 0,
    password:'',
    fonction:'',
    id_categorie:0,
    img:'',
  };
  constructor(private localstorage : LocalstorageService,private router : Router,private app : AppComponent){
    this.comp1=[];
    this.categories=this.localstorage.getData('categories');
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
  sourcechange(src : string){
    for (const iterator of this.localstorage.getData('users')) {
      if (iterator.id===this.user1.id) {
        iterator.img=src;
        this.newusers.push(iterator);
        continue;
      }
      this.newusers.push(iterator);
    }
    this.localstorage.removeData('users')
    this.localstorage.saveData('users',this.newusers);
    this.newusers=[]
    this.app.image=src;
    this.localstorage.saveData('liveimg',src);
    this.user1.img=src;
    this.router.navigate(["profile"])
  }
  onSubmit(form : NgForm){
    this.invalid='';
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexNom = /^.{2,}$/;
    const regexPassorwd = /^.{8,}$/;
    const regexNumber =  /(^[4-9][0-9]{7}$)|(^2.{7}$)/;
    const regex = new RegExp(regexEmail);
    const regex1 = new RegExp(regexNom);
    const regex2 = new RegExp(regexPassorwd);
    const regex3 = new RegExp(regexNumber);
    let id : number;
    let usertemp : user = this.localstorage.finduserByid(this.localstorage.getData('session'));
    if (this.nemail!=undefined && this.nemail!="") {
    if (regex.test(this.nemail)) {
       this.invalid='';
       for (const iterator of this.localstorage.getData('users')) {
          if (iterator.email===this.nemail && iterator.id!=this.localstorage.getData('session')) {
            this.invalid='Email is present';
            return;
          }else{
            this.userchange.email=this.nemail ;
            this.redirection=true; 
          }
        }
       }
       else{
        this.invalid="Email incorrect";
        return;
      }
  }else{
    this.userchange.email=usertemp.email;
  }
  if (this.nnom!=undefined && this.nnom!="") {
    if (regex1.test(this.nnom)) {
      this.userchange.nom=this.nnom;
    }else{
      this.invalid='Nom invalid';
      return;
    }
  } else {
    
    this.userchange.nom=usertemp.nom;
  }
  if (this.nprenom!=undefined && this.nprenom!="") {
    if (regex1.test(this.nprenom)) {
      this.userchange.prenom=this.nprenom;
    }else{
      this.invalid='Prenom invalid';
      return;
    }
  } else {
    
    this.userchange.prenom=usertemp.prenom;
  }
  if (this.nfonction!=undefined && this.nfonction!="") {
    if (regex1.test(this.nfonction)) {
      this.userchange.fonction=this.nfonction;
    }else{
      this.invalid='fonction invalid';
      return;
    }
  } else {
    this.userchange.fonction=usertemp.fonction;
  }
  this.userchange.id_categorie=this.ncategorie;
  if (this.ntel!=undefined && this.ntel!="") {
    if (regex3.test(this.ntel)) {
      this.userchange.telephone=JSON.parse(this.ntel);
    }else{
      this.invalid='Numero invalid';
      return;
    }
  } else {
    this.userchange.telephone=usertemp.telephone;
  }
  if (this.npassword!=undefined && this.npassword!="") {
    if (regex2.test(this.npassword) && this.npassword===this.cpassword) {
      this.userchange.password=this.npassword;
      this.redirection=true;
    }else{
      this.invalid='Password invalid';
      return;
    }
  } else {
    if (this.cpassword!=undefined  && this.cpassword!="") {
      this.invalid="Password invalid"
    }
    this.userchange.password=usertemp.password;
    this.userchange.img=usertemp.img;
  }
  this.userchange.id=usertemp.id;
  this.user1=this.userchange;
  for (let iterator of this.localstorage.getData('users')) {
    if (iterator.id===usertemp.id) {
      iterator=this.userchange;
      this.newusers2.push(iterator);
      continue;
    }
    this.newusers2.push(iterator);
  }
  //reinitialisation des valeur
  this.nprenom='';
  this.nnom="";
  this.nprenom="";
  this.nemail="";
  this.ntel="";
  this.nfonction="";
  this.npassword="";
  this.cpassword="";
  this.ncategorie=-1;
  this.localstorage.removeData('users')
    this.localstorage.saveData('users',this.newusers2);
    this.newusers2=[];
    if (this.redirection===true) {
      this.localstorage.saveData('livenom','');
      this.localstorage.saveData('liveimg','profile.png');
      this.app.image='profile.png';
      this.app.bienvenue='';
      this.localstorage.removeData('session');
      this.router.navigate(["../login"])
    }else{
      this.router.navigate(["profile"])
    }
  }
}
