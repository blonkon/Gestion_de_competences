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



  constructor(private router:Router,private monService: GlobalService,private localstorage : LocalstorageService){
    
  }

  categories = this.localstorage.getData('categorie')
  onSubmit(form : NgForm){

       const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     const regexNom = /^.{2,}$/;
     const regexPassorwd = /^.{8,}$/;
     const regexNumber =  /(^[4-9][0-9]{7}$)|(^2.{7}$)/;
     const regex = new RegExp(regexEmail);
     const regex1 = new RegExp(regexNom);
     const regex2 = new RegExp(regexPassorwd);
     const regex3 = new RegExp(regexNumber);

     if (regex.test(this.addemail) && regex1.test(this.addnom) && regex1.test(this.addprenom) && regex2.test(this.addpassword) && regex3.test(this.addtel)) {

      if (this.addfonction!="-1" && this.addselffonction.length>1 ) {
        this.invalid='Emploi invalid';
      } else {
        this.invalid='';
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

}
