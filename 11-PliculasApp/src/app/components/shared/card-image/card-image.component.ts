import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input()peliculas: Pelicula[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verDetallePelicula(id: number) {
    this.router.navigate(['/pelicula', id]);
  }
}
