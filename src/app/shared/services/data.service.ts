import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { find, mergeMap, take, tap } from 'rxjs/operators';
import { __values } from 'tslib';
import { Characters, DataResponse, Episode } from '../interface/data.interface';
const QUERY= gql`
 {
  episodes{
    results{
      name
      episode
    }
  }
  characters {
    results {
      id
      name
      status
      species
      gender
      image
    } 
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private episodeSubject = new BehaviorSubject<Episode[]>([]);
  episodes$= this.episodeSubject.asObservable();
  
 private charactersSubject = new BehaviorSubject<Characters[]>([]);
 characters$= this.charactersSubject.asObservable();




  constructor(private apollo: Apollo) { 
    this.getDataAPI();
  }

  getDetails(id: number): any{
    return this.characters$.pipe(
      mergeMap((characters: Characters[])=> characters),
      find((character: Characters)=>character?.id==id)
    );
  }


private getDataAPI():void{
  this.apollo.watchQuery<DataResponse>({
    query:QUERY
  }).valueChanges.pipe(
    take(1),
    tap(({data})=>{
     const {characters, episodes}= data;
     this.charactersSubject.next(characters.results);
     this.episodeSubject.next(episodes.results);

     console.log(data);
    })
  ).subscribe();
  }
}
