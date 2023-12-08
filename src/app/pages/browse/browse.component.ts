import { Component, inject } from '@angular/core';
// import { LoginService } from '../../services/login.service';

// import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topratedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  nowplayingMovies: Movie[] = [];

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topratedMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcomingMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowplayingMovies = result.results;
    });
  }
}
