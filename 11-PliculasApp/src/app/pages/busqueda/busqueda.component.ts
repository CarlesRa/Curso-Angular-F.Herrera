import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculas: Pelicula[] = []
  term: string;

  constructor(
    private peliculasService: PeliculasService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aRoute.params
    .subscribe( (param) => {
      this.term = param.nombre;
      localStorage.setItem('term', this.term);
      this.buscar(this.term);
    });
  }

  buscar(term: string) {

    if (!term) {
      return;
    }
    this.peliculasService.findMovie(term)
      .subscribe(peliculas => {
        this.peliculas = peliculas;
      });


  }

  regresar() {
    this.router.navigateByUrl('/home');
  }

}
