import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-encontrados',
  templateUrl: './heroes-encontrados.component.html',
  styleUrls: ['./heroes-encontrados.component.css']
})
export class HeroesEncontradosComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  mostrarAlerta: boolean = false;

  constructor(
    private router: Router,
    private heroesService: HeroesService,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      if (this.heroes.length <= 0) {
        this.mostrarAlerta = true;
      }
      this.termino = params['termino'];
    });
  }

  verHeroe(nombre: string) {
    console.log(nombre);
    this.router.navigate( ['/heroe', nombre]);
  }

  closeAllert() {
    this.router.navigate(['/heroes']);
  }

}
