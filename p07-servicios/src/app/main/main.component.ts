import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container alto">
          <app-lista></app-lista>
          <app-lista-google></app-lista-google>
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
