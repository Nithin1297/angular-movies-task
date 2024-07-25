import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [FormsModule,AppComponent],
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
    // movieData.push(this.singleMovie[0])
  }

}
