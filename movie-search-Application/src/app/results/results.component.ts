import { Component, OnInit } from '@angular/core';

import { ResultsService } from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  movies=[] ;
  details;

  constructor(public resultsService:ResultsService ) { }

  getDetails(whatttt){
    alert("to do");/* **** */
    this.setMovies();
  };

  setMovies(){
    this.resultsService.setMovies("test");
  }

  ngOnInit(): void {
  }
}
