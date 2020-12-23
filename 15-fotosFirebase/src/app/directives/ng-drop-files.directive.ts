import { Directive, EventEmitter, ElementRef,
         HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../model/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output()mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any) {

    this.prevenirDetener( event );
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any) {

    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any) {

    const transferencia = this.getTransferencia( event );

    if (!transferencia) {
      return;
    }

    this.extraerArchivos( transferencia.files );
    this.prevenirDetener( event );
    this.mouseSobre.emit(false);

  }

  private getTransferencia( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extraerArchivos( archivosLista: FileList ) {

    console.log(archivosLista);

    if ( !Object.getOwnPropertyNames( archivosLista )) {
      return;
    }

    for ( const propiedad of Object.getOwnPropertyNames( archivosLista )) {

      const archivoTemporal = archivosLista[propiedad];

      if (this.archivoPuedeSerCargado(archivoTemporal)) {
        const newFile = new FileItem(archivoTemporal);

        this.archivos.push(newFile);
      }
    }

    console.log( this.archivos );
  }

  // Validaciones//

  // Evitar que no se abra la imagen cuando hacemos el drop
  private prevenirDetener( event ) {
    event.preventDefault();
    /* event.stopPropagation(); */
  }

  // Asegurarnos que el archivo no existe
  private archivoYaFueDroppeado( nombreArchivo: string): boolean {

    for ( const archivo of this.archivos) {

      if ( archivo.nombreArchivo == nombreArchivo ) {
        console.log('El archivo ' + nombreArchivo + ' ye esta agregado');
        return true;
      }
    }

    return false;
  }

  // Verificar que sean imagenes
  private esImagen( tipoArchivo: string ): boolean {
    return ( tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }


  // Hace la combinación de ambas comprueba si es imagen y el drop
  private archivoPuedeSerCargado( archivo: File): boolean {

    if ( !this.archivoYaFueDroppeado( archivo.name ) && this.esImagen( archivo.type )) {
      return true;
    }
    else {
      return false;
    }
  }
}
