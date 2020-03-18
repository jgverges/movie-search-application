import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class DetailResultService {
  details:Movie;
  
  constructor(public http:HttpClient) { }

  getDetails(imdbID){
    this.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        }
    });
  };
  getByImdbIDd(imdbID:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&i='+imdbID);
  }



}
