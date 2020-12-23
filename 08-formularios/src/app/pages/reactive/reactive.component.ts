import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDatosFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {
  }


  campoNoValido(campo: string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray
  }

  get usuariExiste() {
    return this.forma.get('usuario') && this.forma.get('usuario').touched;
  }


  crearFormulario() {

    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)],],
      apellido: ['', [Validators.required, Validators.minLength(5), this.validadores.noHerrera] ,],
      correo: ['', [Validators.pattern( '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
                    Validators.required],],
      usuario: ['', , this.validadores.existeUsuario ],
      pass1: ['', Validators.required],
      pass2: ['', [Validators.required]],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  crearListeners() {
    /* this.forma.valueChanges.subscribe( valor => {
      console.log(valor);

    });

    this.forma.statusChanges.subscribe(status => {
      console.log(status);

    }); */

    this.forma.get('nombre').valueChanges.subscribe( r=> console.log(r));

  }

  cargarDatosFormulario() {
    /* this.forma.setValue */
    this.forma.reset({
      nombre: 'Juan Carlos',
      apellido: 'Ramos',
      correo: 'juan@gmail.com',
      pass1: '123',
      pass2: '123',
      direccion: {
        distrito: 'Roques',
        ciudad: 'Denia'
      }
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push( this.formBuilder.control('') )
  }

  borrarPasatiempo(position: number) {
    this.pasatiempos.removeAt(position);
  }

  guardar() {

    if (this.forma.invalid) {

      /* Object.values( this.forma.value.direccion ).forEach( control => {
        control.markAsTouched()
      }) */

      return Object.values( this.forma.controls ).forEach( control => {

        if ( control instanceof FormGroup) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }


      });

    }

    // Posteo de información
    this.forma.reset({
      nombre: 'sin nombre'
    });
  }

}
