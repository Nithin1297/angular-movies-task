import { Injectable } from '@angular/core';

export type Movie = {
  id : number;
  Title: string;
  rating: number;
  discription: string;
  imageURL: string;
  trailer : string;
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // num = 5;
  movieData = [
    {
      id: 1,
      Title: 'Love Today',
      rating: 9.1,
      discription:
        'Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
        trailer : ""
    },
    {
      id: 2,
      Title: 'Beast',
      rating: 8.0,
      discription:
        'Beast is a 2022 Indian Tamil-language action comedy film written and directed by Nelson Dilipkumar and produced by Kalanithi Maran under Sun Pictures. The film stars Vijay and Pooja Hegde in the lead roles, alongside Selvaraghavan, Shaji Chen, VTV Ganesh, Ankur Vikal, Aparna Das, Sathish Krishnan, Shine Tom Chacko, Yogi Babu and Redin Kingsley.',
      imageURL: 'https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg',
      trailer : ""
    },
    {
      id: 3,
      Title: 'PS1',
      rating: 9.4,
      discription:
        'Ponniyin Selvan: I (PS-1, transl.The Son of Ponni) is a 2022 Indian Tamil-language epic action drama film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan.',
      imageURL: 'https://i.redd.it/lq72e1sl4fo91.jpg',
      trailer : ""
    },
    {
      id: 4,
      Title: 'Sardar',
      rating: 9.5,
      discription:
        'Sardar (transl.Chief) is a 2022 Indian Tamil-language spy action-thriller film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under his production banner Prince Pictures.',
      imageURL: 'https://pbs.twimg.com/media/FbkXGJMXoAAcye0.jpg',
      trailer : ""
    },
  ];

  constructor() {}

  getMovieByIdex(id: number) {
    // return this.movieData.find(movie => movie.id == id);
    return this.movieData[id]
  }

  deleteMovies(movie: Movie) {
    const index = this.movieData.indexOf(movie);
    if (index != -1) {
      this.movieData.splice(index, 1);
    }
  }
}
