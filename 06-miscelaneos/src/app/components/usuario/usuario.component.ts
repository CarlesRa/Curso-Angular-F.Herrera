import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  parametro: number;

  constructor(
    private aRoute: ActivatedRoute
  ) {
    this.aRoute.params.subscribe(value => {
      this.parametro = value.id;
      console.log("Ruta padre");
      console.log(value);

    });
  }

  ngOnInit(): void {
  }

}
