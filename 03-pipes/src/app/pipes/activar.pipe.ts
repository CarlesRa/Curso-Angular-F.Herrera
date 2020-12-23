import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    /* let length: number = value.length;

    if ( activar ) {
      value = '';
      for (let i=0; i<length; i++) {
        value += '*';
      }
      console.log(value);
      return value;
    }

    return value; */
    return ( activar ) ? '*'.repeat( value.length ) : value;
  }
}
