import { Injectable } from '@angular/core';
import { Lista } from '../model/lista.model';

@Injectable({
	providedIn: 'root'
})
export class DeseosService {

	listas: Lista[] = []

	constructor() {
    /* const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Héroes a desaparecer');

    this.listas.push(lista1, lista2);
 */
		this.cargarStorage();

	}

	obtenerListaById(idLista: number | string): Lista {

		/* let id = Number(idLista); */

		return this.listas.find((lista) => lista.id == idLista);
	}


	getListas(): Lista[] {
		return this.listas;
	}


	crearLista(titulo: string) {

		const nuevaLista = new Lista(titulo);
		this.listas.push(nuevaLista);
		this.guardarStorage();

		return nuevaLista.id;
	}

	borrarLista(lista: Lista) {

		this.listas = this.listas.filter( listaData => listaData.id !== lista.id);
		this.guardarStorage();
	}

	guardarStorage() {
		localStorage.setItem('data', JSON.stringify(this.listas));
	}

	cargarStorage() {

		if (localStorage.getItem('data')) {
			this.listas = JSON.parse(localStorage.getItem('data'));
		} else {
			this.listas = [];
		}
	}

}
