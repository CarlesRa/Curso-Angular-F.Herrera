import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);

      this.forma = fb.group({
        'titulo': data.titulo,
        'descripcion': data.descripcion
      })
    }

  ngOnInit(): void {
  }

  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
