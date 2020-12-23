import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = 38.8277128;
  lgt = 0.06777034;


  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    const nuevoMarcador: Marcador = new Marcador(38.8277128, 0.06777034);
    /* const nuevoMarcador: Marcador = new Marcador(0.06777034, 38.8277128); */
    this.marcadores.push(nuevoMarcador);

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
		}

   }

  ngOnInit(): void {
  }


  agregarMarcador( evento ) {

    const coords: { lat: number, lng: number} = evento.coords;
    const nuevoMarcador: Marcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    const json = JSON.stringify(this.marcadores);
    this.guardarStorage();
    this.mostrarSnack('Marcador añadido');

  }

  borrarMarcador(position: number) {

    this.marcadores.splice(position, 1);
    this.guardarStorage();
    this.mostrarSnack('Marcador borrado');

  }

  guardarStorage() {

    const json = JSON.stringify(this.marcadores);
    localStorage.setItem('marcadores', json);
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;
      this.guardarStorage();
      this.mostrarSnack('Marcador editado corréctamente');
    });
  }

  mostrarSnack(titulo: string) {
    this.snackBar.open(titulo, 'Cerrar', {
      duration: 3000
    });
  }

 }
