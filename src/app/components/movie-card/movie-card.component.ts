import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { tmbdConfig } from '../../constants/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  imgPath = tmbdConfig.imgPath

}
