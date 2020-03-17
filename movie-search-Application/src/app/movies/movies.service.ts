import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  addItem:boolean= false;
  public favorites: Array<{name:string,count:number}>= [{name:"camello",count:99},{name:"patata",count:77},{name:"",count:null}];
  hasResults:boolean = false;
  movies: [] ;
  starOn:boolean= false;
/*   items=[{name:"camello",count:9},{name:"pa",count:10},{name:"",count:null}];
 */
  constructor(public http: HttpClient) { }

/*   setFavoritesItems(favoritesItems){
    this.items.push(favoritesItems);
  }
  getFavoritesItems(){
    this.items.sort(function (a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });

    return this.items;
  }
 */  getMovies(movieTitle:any){
    this.hasResults = false;
    this.getByTitle(movieTitle.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        this.addItem=false;
        //console.log(this.movies, this.favorites[0].count);/*  */
        this.incresasesFavorites(movieTitle);
          }
    });
    return this.favorites;/*  */
  }
  getByTitle(movieTitle:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&s='+movieTitle);
  }
  /* ****** */
  getByImdbIDd(imdbID:string):Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=90493536&i='+imdbID);
  }
  /* * */
  getFav(favoritesS){      console.warn(favoritesS);/*  */
    favoritesS=this.favorites; console.warn(favoritesS);/*  */
    return favoritesS;
  }
  incresasesFavorites(movieTitle:any){
/*     this.favorites.push({name:movieTitle.value, count:1});console.log(this.favorites);
    return this.favorites;/*  */  
    let exist= false;
    if (this.hasResults)  {                           
        this.starOn=true; 
        this.favorites.forEach(item =>{ 
          if (item.name ==movieTitle.value){
            exist=true;
            item.count++;
          }      
        });    console.warn(this.favorites);         // this.favorites.push({name:movieTitle.value, count:1});console.warn(this.favorites);/* ***** */
        if(!exist && this.addItem) {         // console.log("exist= "+movieTitle.value);
          this.favorites.push({name:movieTitle.value, count:1});
        } 
    }
    else return;
    this.favorites.sort(function (a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });
    return this.favorites;/*  */
  }

}
