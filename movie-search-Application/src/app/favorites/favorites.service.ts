import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  items=[{name:"",count:null},{name:"",count:null},{name:"",count:null}];

  constructor() { }
  
  setFavoritesItems(favoritesItems){
    this.items.push(favoritesItems);
  }
  getFavoritesItems(){
    this.items.sort(function (a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });
    return this.items;
  }

}
