import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tmbdConfig } from '../constants/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  httpServer = inject(HttpClient);

  getPopularMovies() {
    const headers = this.getHeaders();
    return this.httpServer.get('https://api.themoviedb.org/3/movie/popular', {
      headers,
    });
  }

  getNowPlayingMovies() {
    const headers = this.getHeaders();
    return this.httpServer.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers,
    });
  }
  getUpcomingMovies() {
    const headers = this.getHeaders();
    return this.httpServer.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers,
    });
  }
  getTopRatedMovies() {
    const headers = this.getHeaders();
    return this.httpServer.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers,
    });
  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + tmbdConfig.accessToken);

    return headers;
  }
}
