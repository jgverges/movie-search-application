import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  addItem: boolean;
  exist: boolean;
  favorites: Array<{ name: string, count: number }> = [{ name: "aa", count: 1 }, { name: "bb", count: 2 }, { name: "", count: null }];

  hasResults: boolean = false;
  items = [{ name: "", count: null }, { name: "", count: null }, { name: "", count: null }];
  starOn: boolean = false;

  constructor() { }

  addFavorite(movieTitle) {
    this.addItem = true;
    this.increasesFavorites(movieTitle);
  }
  increasesFavorites(movieTitle) {
    let exist = false;
    if (this.hasResults) {
      this.items.forEach(itemV => {
        if (itemV.name == movieTitle.value) {
          exist = true;
          itemV.count++;
          this.starOn = true;
        }
      });
      if (!exist && this.addItem) {
        this.setFavoritesItems({ name: movieTitle.value, count: 1 });
        this.starOn = true;
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
}

