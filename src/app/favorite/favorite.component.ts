import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }
  
  getGlyphicon() {
    return this.isFavorite ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

}
