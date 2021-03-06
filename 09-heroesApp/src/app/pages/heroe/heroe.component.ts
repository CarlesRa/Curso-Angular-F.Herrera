import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(
    private heroeService: HeroesService,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.heroeService.getHeroebyId(id)
        .subscribe( (resp: HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
        });
    }

  }

  guardar(form: NgForm) {

    if (form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere',
      allowOutsideClick: false,
      text: 'Guardando información',
      icon: 'info',
    });
    Swal.showLoading();

    let peticion: Observable<any>

    if (this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe(this.heroe);

    } else {
      peticion = this.heroeService.crearHeroe(this.heroe);

    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Actualizado correctamente',
        icon: 'success'
      });
    });



  }

}
