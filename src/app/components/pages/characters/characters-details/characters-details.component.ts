import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '@apollo/client/utilities';
import { DataService } from '@pp/shared/services/data.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  characterId: string | any;
  character$: Observable<any> | any;

  constructor(private route: ActivatedRoute, private dataSvc: DataService) { 
    this.route.params.pipe(
      take(1),
      tap(({id})=> this.character$= this.dataSvc.getDetails(id))
    ).subscribe();
  }

  ngOnInit(): void {
  }

}
