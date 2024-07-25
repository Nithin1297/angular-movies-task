import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss'
})
export class AddmovieComponent {
  Title = "";
  rating = "";
  discription = "";
  imageURL = "";

 @Input() singleMovie = [{}]
  add(){
    this.singleMovie.push({Title :this.Title,rating:this.rating,discription:this.discription,imageURL:this.imageURL});
  }
}
