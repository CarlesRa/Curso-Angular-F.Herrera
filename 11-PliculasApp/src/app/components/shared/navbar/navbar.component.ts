import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaComponent } from '../../pelicula/pelicula.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(PeliculaComponent) peliculaComponent: PeliculaComponent;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  buscar(term: any) {

    this.router.navigate(['busqueda', term.value]);

  }
}
