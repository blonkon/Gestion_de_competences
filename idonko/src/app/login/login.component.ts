import { Component } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { user } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private localstorage : LocalstorageService){}
  Users:any[] = this.localstorage.getData('users');
  user:string='';
  
}
