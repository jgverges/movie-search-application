import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { FavoritesService } from '../favorites/favorites.service';
import { Movie } from '../models/movie';
import { ResultsService } from '../results/results.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies: [] ;

  constructor(public http: HttpClient,
              public resultsService: ResultsService,
              public favoriteService:FavoritesService) { }
 
  getMovies(movieTitle:any){
    this.favoriteService.starOn= false;
    this.favoriteService.hasResults=false;
    this.getByTitle(movieTitle.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.checkFavorites(movieTitle);
        this.resultsService.setMovies(this.movies);    
        }
    });
  }

  checkFavorites(movieTitle){
    this.favoriteService.hasResults=true;  
    this.favoriteService.addItem=false;
    this.favoriteService.increasesFavorites(movieTitle);
  }

  getByTitle(movieTitle:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&s='+movieTitle);
  }
  

}
