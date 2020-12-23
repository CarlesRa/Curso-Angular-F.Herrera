import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor(private eR: ElementRef) {
    console.log("entra directiva");

  }

  @HostListener('mouseenter') mouseEntro() {

    this.resaltar (this.nuevoColor || 'yellow');
    this.eR.nativeElement.style.cursor = "pointer";
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
  }

  private resaltar(color: string) {
    this.eR.nativeElement.style.backgroundColor = color;
  }
}
