import { Component, OnInit } from '@angular/core';
import { DetailResultService } from './detail-result.service';

@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrls: ['./detail-result.component.scss']
})
export class DetailResultComponent implements OnInit {

  constructor(public detailResultService:DetailResultService) { }

  ngOnInit(): void {
  }
  getDetails(){

  }
}
