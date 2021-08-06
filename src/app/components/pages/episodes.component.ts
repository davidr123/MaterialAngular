import { Component, OnInit } from '@angular/core';
import { DataService } from '@pp/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
episodes$= this.dataSvc.episodes$;
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
  }

}
