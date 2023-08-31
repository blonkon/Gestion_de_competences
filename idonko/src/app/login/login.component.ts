import { Component } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router ,private monService: GlobalService ,private localstorage : LocalstorageService){ 
  }
  getEmail!:string;
  getPassword!:string;
  invalid : string = "";
  users:user[] = this.localstorage.getData('users');
  user:string='';
  onSubmit(form : NgForm){
    for (const iterator of this.users) {
      if (this.getEmail===iterator.email && this.getPassword===iterator.password) {
        this.monService.addsession(iterator.id);
        this.router.navigate([""]);
      }else{
        this.invalid="Invalid"
      }
    }
  }
}
