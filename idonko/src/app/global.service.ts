import { Injectable } from '@angular/core';
import { Categories } from './models/categories';
import { CardsData } from './models/CardsData';
import { LocalstorageService } from './localstorage.service';
import { user } from './models/user';
import { competence } from './models/competence';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  comp:competence[]=[];
  use! : user;

  addsession(id : number){
    this.localstorage.saveData('session',id)
  }
  carouselData1 = this.localstorage.getData('users'); 
  carouseltemp : any[][];
  carouselData2 : user[][]=[];

  constructor(private localstorage: LocalstorageService) {
    this.carouseltemp = [];
  }
  carroureldata(): any {

    this.carouselData1 = this.localstorage.getData('users'); // Assurez-vous que carouselData1 est correctement initialisé
    this.carouseltemp = [];
    let n=0;
    let lastmenber=0;
    if (this.carouselData1.length%3===0) {
      n= Math.floor(this.carouselData1.length/3)
    }else{
      n=Math.floor(this.carouselData1.length/3)+1;
      if (this.carouselData1.length%3===1) {
        lastmenber=1;
      } else {
        lastmenber=2;
      }
    }
    for (let i = 0; i < n; i++) {
    let ligne = [{}, {}, {}];
    if (i===(n-1) && lastmenber===1) {
      ligne = [{}]
    }else if(i===(n-1) && lastmenber===2){
      ligne=[{},{}]
    }
    this.carouseltemp.push(ligne);
  }

  

    let x = 0;
    let y = 0;
    for (const iterator of this.carouselData1) {
      this.carouseltemp[x][y] = iterator;
      y++;
      if (y === 3) {
        y = 0;
        x++;
      }
     
    }
    return this.carouseltemp;
  }
  
 

  categories = this.localstorage.getData('categories')


carouselData2fill(id: number) {
  this.carouselData2 = []; // Réinitialisez le tableau avant de le remplir à nouveau
  let y = 0;
  let currentGroup: any[] = []; // Tableau temporaire pour stocker les éléments actuels

  for (const elements of this.carroureldata()) {
    for (let element of elements) {
      if (element.id_categorie == id) {
          currentGroup.push(element);
          if (currentGroup.length == 3) {
            this.carouselData2.push(currentGroup.splice(0, 3))
          }
      }
    }
  }

  // Divisez le tableau en groupes de 3 éléments et ajoutez-les à carouselData2
  while (currentGroup.length > 0) {
    this.carouselData2.push(currentGroup.splice(0, 3));
  }
}

}
