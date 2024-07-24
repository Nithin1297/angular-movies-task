import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
like = 0
dislike = 0
likeIncreament(){
  this.like += 1;
}
disLikeIncreament(){
this.dislike +=1
}
clearLikes(){
this.like = 0;
}
str = ""


}
