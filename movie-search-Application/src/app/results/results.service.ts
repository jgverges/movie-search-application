import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  movies=[] ;

  constructor() { }
 
 setMovies(moviesArr){
  this.movies=moviesArr;
  };

}
