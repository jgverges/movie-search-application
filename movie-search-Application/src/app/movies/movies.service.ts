import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
                      addItem:boolean= false;
  hasResults:boolean = false;
  movies: [] ;
              starOn:boolean= false;

  constructor(public http: HttpClient) { }
 
  getMovies(movieTitle:any){
    this.hasResults = false;
    this.getByTitle(movieTitle.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        this.addItem=false;
                                        console.log(this.movies);/*  */
        }
    });
  }
  
  getByTitle(movieTitle:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&s='+movieTitle);
  }
}
