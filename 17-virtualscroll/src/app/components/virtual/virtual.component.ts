import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewPort: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);

  }

  irALFinal() {
    this.viewPort.scrollToIndex(this.personas.length, 'auto');
  }

  irALInicio() {
    this.viewPort.scrollToIndex(0);
  }

  irAMitad() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }
}
