import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:null},{name:"star",count:null},{name:"",count:null}];

  constructor(private moviesService:MoviesService) { }


}
