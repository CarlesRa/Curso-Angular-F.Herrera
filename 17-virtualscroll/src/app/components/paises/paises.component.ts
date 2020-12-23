import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    /* this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (paisesData: any[]) => this.paises = paisesData); */
  }

  nombrePais(position: number) {

    /* console.log(this.paises[position].name); */


  }

 /*  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  } */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log(this.basket[event.currentIndex]);
    }
  }

}
