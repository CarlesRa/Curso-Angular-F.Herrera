import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/model/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileItem[] = [];

  constructor(
    public cargaImagenes: CargaImagenesService
  ) { }

  ngOnInit(): void {

  }

  cargarImagenes() {
    this.cargaImagenes.cargarImagenesFirebase( this.archivos );
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
