import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {
  movieTitle =  new FormControl('');
  starOn:boolean;

  constructor(private moviesService:MoviesService) {
   }

  getMovies(movieTitle:any){
    this.starOn= false;
    this.moviesService.getMovies(movieTitle);
  }

}
