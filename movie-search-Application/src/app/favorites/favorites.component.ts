import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Array<{name:string,count:number}>;

  @Input() movieTitle:any;                    

  constructor(public favoriteService:FavoritesService) { }
 
  ngOnInit(){
    this.favorites=this.favoriteService.getFavoritesItems();
  }
  addFavorite(movieTitle:any){  
    this.favoriteService.addFavorite(movieTitle);
    this.favorites= this.favoriteService.getFavoritesItems();
  }

}