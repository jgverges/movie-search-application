import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  addItem:boolean;
  hasResults:boolean = false;
  items = [{ name: "", count: null }, { name: "", count: null }, { name: "", count: null }];
  starOn:boolean= false;
  exist:boolean;

  constructor() { }

  addFavorite(movieTitle){ console.log(this.hasResults);
    this.addItem=true;
    this.increasesFavorites(movieTitle);
  }
  increasesFavorites(movieTitle) {
    let exist = false;
    if (this.hasResults) {
      this.starOn=true;
      this.items.forEach(itemV => {
        if (itemV.name == movieTitle.value) {
          exist = true;
          itemV.count++;
        }
      });
      if (!exist && this.addItem) {
        this.setFavoritesItems({ name: movieTitle.value, count: 1 });
      }                               
    }
    /* return exist; */
  }

  getFavoritesItems() {
    this.items.sort((a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
      return 0;
    });
    return this.items;
  }

  setFavoritesItems(favoritesItems) {
    this.items.push(favoritesItems);
  }
  setHasResults(results){
    this.hasResults=results;
  }
}

