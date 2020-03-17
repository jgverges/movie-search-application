import { Component, Input, OnInit } from '@angular/core';

import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  addItem:boolean;
  favorites: Array<{name:string,count:number}>;
  starOn:boolean= false;
  hasResults:boolean;
  @Input() movieTitle:any;

  constructor(public moviesService:MoviesService) { }
 
  ngOnInit(){
    this.favorites=this.moviesService.getFavoritesItems();
  }
  addFavorite(movieTitle:any){  
    this.starOn= true;
    this.addItem=true;
    this.moviesService.setFavoritesItems({name:"patata",count:77});
/*     this.moviesService.incresasesFavorites(movieTitle);
 */    this.moviesService.getFavoritesItems();
      this.favorites=this.moviesService.getFavoritesItems();

    console.log(this.favorites);
    
  }


}
