import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'juAN carLoS rAMoS';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.235;

  salario: number = 1234.5;

  fecha: Date = new Date();

  activarNombre: boolean = true;
  nombreBoton: string = 'Ver'

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('LLego la data');
    }, 4500);
  });

  idioma = 'fr';

  videoUrl: string = 'https://www.youtube.com/embed/SyPfnWv5LVU';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  alternarTextoBoton() {
    /* this.activarNombre = !this.activarNombre; */
    if (this.nombreBoton === 'Ver') {
      this.nombreBoton = 'Ocultar';
      return;
    }
    this.nombreBoton = 'Ver';
  }

  /* cambiarIdioma(value: string) {
    switch (value) {
      case 'es': {
        this.idioma = 'es';
        break;
      }
      case 'en': {
        this.idioma = 'en';
        break;
      }
      case 'fr': {
        this.idioma = 'fr';
        break;
      }
    }
  } */
}
