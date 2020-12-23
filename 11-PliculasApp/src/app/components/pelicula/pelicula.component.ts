import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {

  peliculaId: number;
  pelicula: Pelicula;
  cargando: boolean = true;

  constructor(
    private aRoute: ActivatedRoute,
    private pelisService: PeliculasService,
    private router: Router,
    private location: Location
  ) {
    this.aRoute.params
    .subscribe(id => {
      this.peliculaId = id['id'];
      if (!(this.pelicula = this.getPelicula(this.peliculaId))) {
        router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit(): void {

  }

  private getPelicula(id: number): Pelicula {
    return this.pelisService.findMovieById(id);
  }

  regresar() {
    this.location.back();
  }
}
