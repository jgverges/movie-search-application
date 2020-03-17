import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  pera="pera";/*  */
  movies=[] ;
  details;

  constructor() { }
 
 setMovies(moviesArr){
  this.movies=moviesArr;
/*   this.movies=Object.assign([],moviesArr);
 */      console.warn(this.movies);
  };
setResults(){
                   /*  */
}

}
