import { Component } from '@angular/core';
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

  allMovies : Movie [] = [
    {
      Title: "Love Today",
      rating: 9.1,
      discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
    },
    {
      Title: "Beast",
      rating: 9.1,
      discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
      imageURL: "https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg",
    },
    {
      Title: "PS1",
      rating: 9.4,
      discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
      imageURL: "https://i.redd.it/lq72e1sl4fo91.jpg",
    },
    {
      Title: "Sardar",
      rating: 9.5,
      discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
      imageURL: "https://pbs.twimg.com/media/FbkXGJMXoAAcye0.jpg",
    },
  ];
}
