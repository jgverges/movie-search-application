import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Array<{name:string,count:number}>;
/*   starOn:boolean= false;   
  hasResults:boolean=true; 
  exist:boolean;
 */  
  @Input() movieTitle:any;                    

  constructor(public favoriteService:FavoritesService) { }
 
  ngOnInit(){
    this.favorites=this.favoriteService.getFavoritesItems();
  }
  addFavorite(movieTitle:any){  
    this.favoriteService.addFavorite(movieTitle);
    this.favorites= this.favoriteService.getFavoritesItems();
/*     if (!this.hasResults){ 
      return 
    };
    this.starOn= true;
 */    /* this.exist= this.favoriteService.increasesFavorites(movieTitle); */
/*     if (!this.exist) {
      this.favoriteService.setFavoritesItems({ name: movieTitle.value, count: 1 });
    }                               
    this.favorites= this.favoriteService.getFavoritesItems();
 */  }


}
