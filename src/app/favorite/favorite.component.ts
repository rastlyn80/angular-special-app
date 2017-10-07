import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  isFavorite = false;

  constructor() { }
  
  getGlyphicon() {
    return this.isFavorite ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
