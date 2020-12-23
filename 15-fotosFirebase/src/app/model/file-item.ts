export class FileItem {

  public archivo: File;
  public nombreArchivo: string;
  public url: string;
  public estaSubiendo: boolean;
  public progreso: number;

  constructor( arxivo: File) {

    this.archivo = arxivo;
    this.nombreArchivo = arxivo.name;
    this.estaSubiendo = false;
    this.progreso = 0;

  }

}
