import { Component, Input } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  trustedUrl!: SafeUrl;
  movie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    let idx = this.route.snapshot.paramMap.get('id') || 0; // From URL
    console.log(idx);
    this.movie = this.movieService.getMovieByIdex(+idx);
    console.log(this.movie);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailer
    );
  }
}
