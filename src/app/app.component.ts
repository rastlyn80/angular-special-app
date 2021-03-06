import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChanged(eventArgs) {
    console.log("Favorite changed. Now it is: " , eventArgs);
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }
}
