import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../model/lista.model';

@Pipe({
	name: 'filtroListas',
	pure: false
})
export class FiltroListasPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

		return listas.filter( lista => lista.terminada === completada);

  }

}
