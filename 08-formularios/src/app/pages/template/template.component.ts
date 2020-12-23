import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises: any[] = [];

  usuario = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    correo: 'fernandoherrera@gmail.com',
    pais: 'CRI',
    genero: 'M'
  }

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe( paises => {

        this.paises = paises;

        this.paises.unshift({
          nombre: '[ Seleccione País ]',
          codigo: ''
        })

      });
  }

  guardar(forma: NgForm) {


    if (forma.invalid) {

      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });

      return;
    }
    console.log(forma.value);
    forma.reset();
  }

}
