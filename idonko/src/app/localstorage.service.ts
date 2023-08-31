import { Injectable } from '@angular/core';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  // Enregistrer des données dans le localStorage
  saveData(key: string, data: any) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  }

  // Récupérer des données du localStorage
  getData(key: string): any {
    const dataString = localStorage.getItem(key);
    if (dataString!=null) {
      return JSON.parse(dataString);
    }
  }
  removeData(key:string):any{
    localStorage.removeItem(key);
  }
  finduserByid(id : number) :any{
    for (const iterator of  this.getData('users') ) {
      if (id===iterator.id) {
        return iterator;
      }
    }
   
  }
}
