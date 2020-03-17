import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {
  title =  new FormControl('');


  constructor(private moviesService:MoviesService) { }

  getMovies(title:any){
    this.moviesService.getMovies(title);
  }
  addFavorite(title:any):void{  
/*     this.addItem=true;
 */    this.moviesService.incresasesFavorites(title);
  }

}
