import { Component, inject } from '@angular/core';
// import { LoginService } from '../../services/login.service';

// import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
import { tmbdConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';
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
  bannerMovie!: Movie;
  tmbdConfig = tmbdConfig;
  public domSanitize = inject(DomSanitizer)
  // constructor(videoURL: string, private _sanitizer: DomSanitizer) {
  //   this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  // }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[Math.floor(Math.random() * this.popularMovies.length + 1)];
      // this.bannerMovie = this.popularMovies[0];
      this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res: any) => {
        this.bannerMovie.videoKey = res.results.find((x: any) => (x.site = 'YouTube')).key;
        console.log(this.bannerMovie);
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
    });
  }
}
