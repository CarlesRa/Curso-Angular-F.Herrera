import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: number, votosTotales: number): number {

    return Math.round(popularity / votosTotales);
  }

}
