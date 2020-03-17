import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  items=[{name:"",count:null},{name:"",count:null},{name:"",count:null}];
  hasResults=true;
/*   favorites;
 */
  constructor() { }
  
  setFavoritesItems(favoritesItems){
    this.items.push(favoritesItems);
  }
  getFavoritesItems(){
    this.items.sort( (a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });
    return this.items;
  }
  incresasesFavorites(movieTitle){
    let exist= false;
    if (this.hasResults)  {                         
      this.items.forEach(itemV=>{ 
        if (itemV.name ==movieTitle.value){
          exist=true;
          itemV.count++;
        }      
      });    
      if(!exist) {         
        this.setFavoritesItems({name:movieTitle.value, count:1});
      }   
    }
  }
}
