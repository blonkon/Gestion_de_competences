import { Injectable } from '@angular/core';
import { Categories } from './models/categories';
import { CardsData } from './models/CardsData';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private localstorage : LocalstorageService) { }
   carouselData2 : CardsData[][] = [];
   onclick:boolean=false;
   carouselData = this.localstorage.getData('carousel'); 
  categories = this.localstorage.getData('categorie')


carouselData2fill(id: number) {
  this.carouselData2 = []; // Réinitialisez le tableau avant de le remplir à nouveau
  let y = 0;
  let currentGroup: any[] = []; // Tableau temporaire pour stocker les éléments actuels

  for (const elements of this.carouselData) {
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
