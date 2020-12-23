import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/model/pelicula.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculasEnCartelera: Pelicula[];
  peliculasPopulares: Pelicula[] = [];

  constructor(
    public peliculasService: PeliculasService
  ) {

   }

  ngOnInit(): void {

    this.peliculasService
      .nowPlaying()
      .subscribe((peliculas: Pelicula[]) => {
        this.peliculasEnCartelera = peliculas;
        console.log(this.peliculasEnCartelera);

      });

    this.peliculasService
      .popularMovies()
      .subscribe((peliculas: Pelicula[]) => this.peliculasPopulares = peliculas);
  }

}
