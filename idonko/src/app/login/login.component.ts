import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AutresComponent } from '../autres/autres.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router:Router ,private monService: GlobalService ,private localstorage : LocalstorageService, private appcomp : AppComponent,private autres : AutresComponent){ 
  }
 

  getEmail!:string;
  getPassword!:string;
  invalid : string = "";
  users:user[] = this.localstorage.getData('users');
  user:string='';
  onSubmit(form : NgForm){
        // this.user1 = this.localstorage.finduserByid(this.localstorage.getData('session'));
    for (let iterator of this.users) {
      if (this.getEmail===iterator.email && this.getPassword===iterator.password) {
        this.monService.addsession(iterator.id);
        this.localstorage.removeData('livenom');
        this.localstorage.removeData('liveimg');
        this.localstorage.saveData('livenom','Salut Mr. '+iterator.nom);
        this.localstorage.saveData('liveimg','assets/'+iterator.img);
        this.autres.carouselData=this.monService.carroureldata();
        this.autres.sessionid=iterator.id;
        this.appcomp.bienvenue='Salut Mr. '+iterator.nom;
        this.appcomp.image='assets/'+iterator.img
        this.router.navigate([""]);
      }else{
        this.invalid="Invalid";
      }
    }
  }
}
