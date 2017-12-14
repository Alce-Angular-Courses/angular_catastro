import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container alto">
      <app-lista></app-lista>
      <app-lista-v4></app-lista-v4>
      <app-lista-xtend></app-lista-xtend>
      <app-acumulador></app-acumulador>
    </div>
  `,
  styles: [
    '.alto {min-height: 15rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
