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

  constructor(private moviesService:MoviesService) {
   }

  getMovies(movieTitle:any){
    this.moviesService.getMovies(movieTitle);
  }

}
