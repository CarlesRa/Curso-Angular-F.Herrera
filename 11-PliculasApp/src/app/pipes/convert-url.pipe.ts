import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUrl'
})
export class ConvertUrlPipe implements PipeTransform {

  private imageBaseUrl: string = 'https://image.tmdb.org/t/p/w300';

  transform(value: string): string {
    if (!value) {
      return 'assets/img/imagenpordefecto.jpg';
    }
    return this.imageBaseUrl + value;
  }
}
