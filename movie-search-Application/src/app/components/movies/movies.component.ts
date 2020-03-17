import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {
  movieTitle =  new FormControl('');
  starOn:boolean= false;
  addItem:boolean;
  hasResults:boolean = false;
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:9},{name:"star",count:7},{name:"",count:null}];

  constructor(private moviesService:MoviesService) {
   }

  getMovies(movieTitle:any){
    this.starOn= false;
    this.moviesService.getMovies(movieTitle);
  }

}
