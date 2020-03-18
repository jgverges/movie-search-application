import { Component} from '@angular/core';

import { ResultsService } from './results.service';
import { DetailResultService } from '../detail-result/detail-result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent  {

  constructor(public resultsService:ResultsService,
              public detailsResultService:DetailResultService ) { }

  getDetails(imdbID:string){
    this.detailsResultService.getDetails(imdbID);
  };

}
