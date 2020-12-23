import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()  heroe: Heroe;
  @Input() posicion: number;
  @Input() nombreHeroe: string;

  @Output() heroeSeleccionado: EventEmitter<string>

  constructor(
    private router: Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    /* this.router.navigate( ['/heroe', this.nombreHeroe]); */
    this.heroeSeleccionado.emit( this.nombreHeroe );
  }

}
