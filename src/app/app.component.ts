import { Component, Input } from '@angular/core';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from "./card/card.component";
import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { AddmovieComponent } from "./addmovie/addmovie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, ProfileComponent, CardComponent, MovieListComponent, CounterComponent, AddmovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {


 
}
