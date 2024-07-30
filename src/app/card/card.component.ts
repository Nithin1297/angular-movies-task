import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Movie, MovieService } from '../movie.service';

// type Movie = {
//   id: number;
//   Title: string;
//   rating: number;
//   discription: string;
//   imageURL: string;
//   trailer : string;
// };
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CounterComponent, MatIconModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Output() deleteMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

  @Input() idx: any;
  deleteMovie() {
    this.deleteMovieEvent.emit(this.Movies);
  }
  showDes: boolean = true;

  toggleDesMovie() {
    this.showDes = !this.showDes;
  }

  @Input() Movies = {
    id:0,
    Title: 'Love Today',
    rating: 9.1,
    discription:
      'Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
      trailer : ""
  };
}
