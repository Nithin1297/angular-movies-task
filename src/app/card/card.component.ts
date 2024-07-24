import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Movie = {
Title : string;
rating: number;
discription: string;
imageURL : string
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

 @Input() Movies = { Title : "Love Today",
     rating: 9.1,
     discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
     imageURL:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg"
  }
 
//   allMovies : Movie [] = [];
//   constructor(){
    
// this.allMovies = [
//     {
//       Title: "Love Today",
//       rating: 9.1,
//       discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
//       imageURL:
//         "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
//     },
//     {
//       Title: "Beast",
//       rating: 9.1,
//       discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
//       imageURL: "https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg",
//     },
//     {
//       Title: "PS1",
//       rating: 9.4,
//       discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
//       imageURL: "https://i.redd.it/lq72e1sl4fo91.jpg",
//     },
//     {
//       Title: "Sardar",
//       rating: 9.5,
//       discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
//       imageURL: "https://pbs.twimg.com/media/FbkXGJMXoAAcye0.jpg",
//     },
//   ];
// }



}
