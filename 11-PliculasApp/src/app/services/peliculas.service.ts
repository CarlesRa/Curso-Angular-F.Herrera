import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pelicula } from '../model/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = 'c48879948fb44db81858d9b3ec54f9ef';
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private peliculas: Pelicula[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  nowPlaying() {
    const URL = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=es-ES&page=1`;

    return this.http.get(URL)
      .pipe(map((resp: Pelicula[]) => {
        this.peliculas = resp['results'];
        return this.peliculas.slice(0, 6);
        /* return this.peliculas; */
      }));
  }

  popularMovies() {

    const URL = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`;
    /* const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`; */

    return this.http.get(URL)
      .pipe(map((resp: Pelicula[]) => {
        this.peliculas = resp['results'];
        return this.peliculas.slice(0, 6);
      }));
  }

  findMovie(texto: string) {

    let url = `${this.baseUrl}/search/movie?query=${texto}
      &sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url)
      .pipe(map((resp: Pelicula[]) => {

        this.peliculas = resp['results'];

        return this.peliculas;
      }));
  }

  findMovieById(id: number): Pelicula {
    return this.peliculas.find( (pelicula: Pelicula) => pelicula.id == id);
  }
}
