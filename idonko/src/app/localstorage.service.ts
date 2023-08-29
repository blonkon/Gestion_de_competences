import { Injectable } from '@angular/core';

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
}
