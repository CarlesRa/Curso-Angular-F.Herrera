import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private aRoute: ActivatedRoute
  ) {
    this.aRoute.parent.params.subscribe( param => {
      console.log("Usuario-nuevo-Hijo");
      console.log(param);
    });
  }

  ngOnInit(): void {
  }

}
