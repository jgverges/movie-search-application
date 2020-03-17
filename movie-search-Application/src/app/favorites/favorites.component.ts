import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Array<{name:string,count:number}>;
  starOn:boolean= false;
  hasResults:boolean=true;
  
  @Input() movieTitle:any;

  constructor(public favoriteService:FavoritesService) { }
 
  ngOnInit(){
    this.favorites=this.favoriteService.getFavoritesItems();
  }
  addFavorite(movieTitle:any){  
    if (!this.hasResults){return};
    this.starOn= true;
/*     this.favoriteService.setFavoritesItems({name:"patata",count:77});
 */    
    this.favoriteService.incresasesFavorites(movieTitle);
    this.favorites=this.favoriteService.getFavoritesItems();

    console.log(this.favorites);
    
  }


}
