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
  isLoading: boolean = true;
  msg = '';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.movieService
      .getMovieByIdP(id)
      .then((data) => {
        this.movie = data; // Model
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movie.trailer
        );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
