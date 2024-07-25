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
  showDes: boolean = false;
 
  toggleDesMovie() {
    this.showDes = !this.showDes;
  }

 @Input() Movies = { Title : "Love Today",
     rating: 9.1,
     discription: "Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.",
     imageURL:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg"
  }

}
