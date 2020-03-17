import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
/*   addItem:boolean;
 */  favorites: Array<{name:string,count:number}>;
  starOn:boolean= false;
/*   hasResults:boolean;
 */  
  @Input() movieTitle:any;

  constructor(public favoriteService:FavoritesService) { }
 
  ngOnInit(){
    this.favorites=this.favoriteService.getFavoritesItems();
  }
  addFavorite(movieTitle:any){  
    this.starOn= true;
/*     this.addItem=true;
 */    this.favoriteService.setFavoritesItems({name:"patata",count:77});
/*     this.favoriteService.incresasesFavorites(movieTitle);
 */    
      this.favorites=this.favoriteService.getFavoritesItems();

    console.log(this.favorites);
    
  }


}
