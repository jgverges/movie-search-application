import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

interface IMovie {
  Title:string;
  Year:string;
  imdbID: string;
  Type?:string;
  Poster:string;
  Genr?:string;
  Director:string;
  Actors:string;
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  addItem:boolean= false;
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:null},{name:"star",count:null},{name:"",count:null}];
  hasResults:boolean = false;
  movies: [] ;
  starOn:boolean= false;

  constructor(private http: HttpClient) { }

  getMovies(title:any){
    this.hasResults = false;
    this.starOn= false;
    this.getByTitle(title.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        this.addItem=false;
        console.log(this.movies);/*  */
        this.incresasesFavorites(title);
          }
    });
  }
  getByTitle(title:string):Observable<IMovie> {
    this.http.get<IMovie>('http://www.omdbapi.com/?apikey=90493536&s='+title)
    return this.http.get<IMovie>('http://www.omdbapi.com/?apikey=90493536&s='+title);
  }
  /* ****** */
  getByImdbIDd(imdbID:string):Observable<IMovie> {
    return this.http.get<IMovie>('http://www.omdbapi.com/?apikey=90493536&i='+imdbID);
  }
  /* * */
  incresasesFavorites(title:any){
    let exist= false;
    if (this.hasResults)  {                           
        this.starOn=true; 
        this.favorites.forEach(item =>{ 
          if (item.name ==title.value){
            exist=true;
            item.count++;
          }
        })
        if(!exist && this.addItem) {
          this.favorites.push({name:title.value, count:1});
        } 
    }
    else return;
    this.favorites.sort(function (a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });
  }

}
