import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? this.likesCount + 1 : this.likesCount - 1;
  }

}
