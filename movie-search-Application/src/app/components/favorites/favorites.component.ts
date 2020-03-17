import { Component, Input } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  addItem:boolean;
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:9},{name:"",count:null},{name:"",count:null}];
  starOn:boolean= false;
  hasResults:boolean;
  @Input() movieTitle:any;

  constructor(public moviesService:MoviesService) { }

  addFavorite(movieTitle:any){  
              console.log("entra con movieTitle="+movieTitle.value);/*  */
    this.addItem=true;
    this.moviesService.incresasesFavorites(movieTitle);
    return this.favorites;
  }


}
