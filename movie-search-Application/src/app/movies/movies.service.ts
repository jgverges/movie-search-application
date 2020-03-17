import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Movie } from '../models/movie';
import { ResultsService } from '../results/results.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
                      addItem:boolean= false;
  hasResults:boolean = false;
  movies: [] ;
              starOn:boolean= false;

  constructor(public http: HttpClient,
              public resultsService: ResultsService) { }
 
  getMovies(movieTitle:any){
    this.hasResults = false;
    this.getByTitle(movieTitle.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        this.addItem=false;
        this.resultsService.setMovies(this.movies);                              console.log(this.movies);/*  */
        }
    });
  }
  
  getByTitle(movieTitle:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&s='+movieTitle);
  }
  

}
