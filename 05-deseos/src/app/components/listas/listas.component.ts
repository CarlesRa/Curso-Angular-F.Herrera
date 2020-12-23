import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lista } from 'src/app/model/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

	@Input() terminada;
	@ViewChild( IonList ) ionList: IonList;

  constructor(
		private router: Router,
		public deseosService: DeseosService,
		public alertCtrl: AlertController
	) { }

	ngOnInit() {}
	
	verLista(lista: Lista) {
		if (this.terminada) {
			this.router.navigate(['tabs', 'tab2', 'agregar', lista.id]);
		}
		else {
			this.router.navigate(['tabs', 'tab1', 'agregar', lista.id]);
		}
    
	}
	
	editarTituloLista (lista: Lista) {
		console.log('editarNombre', lista);
		
	}

	borrar( lista: Lista) {
		
		this.deseosService.borrarLista(lista);
	}

	async presentAlert(lista: Lista) {
		const alert = await this.alertCtrl.create({
			header: 'Cambiar título',
			inputs: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'Introduzca el nuevo título',
					value: lista.titulo
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						this.ionList.closeSlidingItems();
					}
				},
				{
					text: 'Cambiar',
					handler: (data) => {

						if (data.name.length === 0) {
							return;
						}

						lista.titulo = data.name;
						this.deseosService.guardarStorage();
						this.ionList.closeSlidingItems();	
					}
				}
			]
		});

		alert.present();
	}
}
