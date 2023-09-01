import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { LocalstorageService } from '../localstorage.service';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { user } from '../models/user';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent{
 
  addnom ='';
  addprenom :string='';
  addemail :string='';
  addpassword:string='';
  addselffonction:string='';
  addtel: string='';
  addfonction:string="-1";
  validname:boolean=false;
  validprename:boolean=false;
  validemail:boolean=false;
  validtel:boolean=false;
  validpassword:boolean=false;
  test:boolean=false;
  invalid:string='';
  testemail:boolean = false;
  user:user ={
    id: 0,
    nom: "",
    prenom: "",
    email: "",
    telephone: 1234567890,
    password: "",
    fonction: "",
    img :'',
    id_categorie: -1
  };


  constructor(private router:Router,private monService: GlobalService,private localstorage : LocalstorageService){
    
  }

  categories = this.localstorage.getData('categories');
  users:user[]=this.localstorage.getData('users');
  onSubmit(form : NgForm){

     const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     const regexNom = /^.{2,}$/;
     const regexPassorwd = /^.{8,}$/;
     const regexNumber =  /(^[4-9][0-9]{7}$)|(^2.{7}$)/;
     const regex = new RegExp(regexEmail);
     const regex1 = new RegExp(regexNom);
     const regex2 = new RegExp(regexPassorwd);
     const regex3 = new RegExp(regexNumber);
     let id : number;

     if (regex.test(this.addemail) && regex1.test(this.addnom) && regex1.test(this.addprenom) && regex2.test(this.addpassword) && regex3.test(this.addtel)) {

      if (this.addselffonction.length<1 ) {
        this.invalid='Emploi invalid';
      } else {
        this.invalid='';
        if (this.users===undefined) {
          id = 1;
        }else{
          id = this.users.length+1;
        }

        while (!this.validid(id,this.users)) {
          id++;
        }
        for (const iterator of this.users) {
          if (iterator.email===this.addemail) {
            this.invalid='Email is present';
            this.testemail=true
          }
        }
        if (this.testemail===false) {
          this.user.id=id;
          this.user.nom=this.addnom;
          this.user.prenom=this.addprenom;
          this.user.telephone= JSON.parse( this.addtel);
          this.user.email=this.addemail;
          this.user.fonction=this.addselffonction;
          this.user.id_categorie=JSON.parse(this.addfonction);
          this.user.password=this.addpassword;
          this.user.img='avatar1.jpg'
         
         
          this.users.push(this.user);
          this.localstorage.removeData('users');
          this.localstorage.saveData('users',this.users);
          this.router.navigate(["../ login"]);
        }
       
      }
      
     } else {
       this.invalid='Invalid';
     }
    
   }

  onNameChange() {
    const regexNom = /^.{2,}$/;
    const regex1 = new RegExp(regexNom);
    if (regex1.test(this.addnom)) {
      this.validname=true
    }else{
      this.validname=false
    }
}
onPrenameChange() {
  const regexNom = /^.{2,}$/;
  const regex1 = new RegExp(regexNom);
  if ( regex1.test(this.addprenom) ) {
    this.validprename=true
  } else {
    this.validprename=false
  }

  
}
onEmailChange() {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regex = new RegExp(regexEmail);
  if (regex.test(this.addemail)) {
    this.validemail=true
  } else {
    this.validemail=false
  }
  
}
onTelChange() {
  const regexNumber =  /(^[4-9][0-9]{7}$)|(^2.{7}$)/;
  const regex3 = new RegExp(regexNumber);
  if (regex3.test(this.addtel)) {
    this.validtel=true
  } else {
    this.validtel=false
  }
  
  
}
onPasswordChange() {
  const regexPassorwd = /^.{8,}$/;
  const regex2 = new RegExp(regexPassorwd);
  if (regex2.test(this.addpassword)) {
    this.validpassword=true
  } else {
    this.validpassword=false    
  }
}

validid(id:number,userss : user[]){
  for (const iterator of userss) {
    if (id===iterator.id) {
      return false;
    }
  }
  return true;
}

}
