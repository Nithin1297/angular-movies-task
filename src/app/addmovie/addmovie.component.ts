import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss'
})
export class AddmovieComponent {
  Title = "";
  rating = "";
  discription = "";
  imageURL = "";

 @Input() singleMovie = [{}]
  add(){
    this.singleMovie.push({Title :this.Title,rating:this.rating,discription:this.discription,imageURL:this.imageURL});
  }
}
