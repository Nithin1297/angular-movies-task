import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CardComponent,AddmovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
idx: any;

  constructor(public movieService : MovieService){
    
  }
}
