import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss'
})
export class AddmovieComponent {

  constructor(public movieService : MovieService){

  }
  id = 0
  Title = "";
  rating = 1;
  discription = "";
  imageURL = "";
  trailer = ""

//  @Input() singleMovie = [{}]
  add(){
    this.movieService.movieData.push({id:this.id,Title :this.Title,rating:this.rating,discription:this.discription,imageURL:this.imageURL,trailer:this.trailer});
  }
}
