import { Component, Input } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:9},{name:"star",count:7},{name:"",count:null}];
  starOn:boolean= false;

  @Input() title:any;
/*   favorites: Array<{name:string,count:number}>= [{name:"casa",count:9},{name:"star",count:7},{name:"",count:null}];
 */
  constructor(public moviesService:MoviesService) { }
  addFavorite(title:any):void{  
    console.log("entra con title="+title.value);
/*     this.addItem=true;
 */    this.moviesService.incresasesFavorites(title);
  }


}
