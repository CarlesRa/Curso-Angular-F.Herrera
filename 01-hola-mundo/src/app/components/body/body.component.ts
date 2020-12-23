import { Component } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrarMensaje: boolean = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  personajes: string[] = [
    'Spiderman',
    'Venom',
    'Dr. Octopus'
  ]

  mostrarOcultar(): boolean {
    this.mostrarMensaje = !this.mostrarMensaje;
    return this.mostrarMensaje;
  }
}
