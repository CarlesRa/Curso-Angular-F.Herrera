import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()peliculas: Pelicula[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verDetallePelicula(id: number) {
    this.router.navigate(['pelicula', id]);
  }
}
