import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

type Movie = {
  Title : string;
  rating: number;
  discription: string;
  imageURL : string
  }

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
@Input() allMovies : any
}
