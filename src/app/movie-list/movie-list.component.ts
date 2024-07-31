import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { Movie, MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CardComponent,AddmovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  idx: any;
  isLoading: boolean = true;
  msg = '';
  moviesdata : Array<Movie> = [];
  constructor (public movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getAllMoviesP()
      .then((data) => {
        this.moviesdata = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

  deleteMovieP(movie: Movie) {
    console.log('Parent ❌', movie);
    this.movieService.deleteMovies(movie);
  }


 
}
