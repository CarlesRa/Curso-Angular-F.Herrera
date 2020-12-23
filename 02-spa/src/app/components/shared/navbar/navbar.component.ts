import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ){ }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    this.router.navigate(['/encontrados', termino]);
  }
}
