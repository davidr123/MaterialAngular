import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Characters } from '@pp/shared/interface/data.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent implements OnInit {
@Input() character: Characters | any;
  constructor() { }

  ngOnInit(): void {
  }
getIcon(): string{
return this.character.isFavorite ? 'like_favorite.png' : 'dislike_favorite.png';
}
  toggleFavorite(): void{
const isFavorite= this.character.isFavorite;
this.getIcon();
this.character.isFavorite = !isFavorite;

  }

}
