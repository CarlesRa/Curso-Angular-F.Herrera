import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Tamales', 'Tortillas', 'Chorizos'];
   public doughnutChartData: MultiDataSet = [
     [44, 450, 100],
     [50, 234, 120],
     [250, 130, 180],
   ];
   public doughnutChartType: ChartType = 'doughnut';

   constructor() { }

   ngOnInit() {
   }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }

   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }

   generateRandoms() {

     const random01 = Math.round(Math.random() * 200);
     const random02 = Math.round(Math.random() * 200);
     const random03 = Math.round(Math.random() * 200);
     const random04 = Math.round(Math.random() * 200);

     this.doughnutChartData = [
       [random01, random02, random03],
       [random03, random02, random01],
       [random02, random03, random04]
     ];
   }

}
