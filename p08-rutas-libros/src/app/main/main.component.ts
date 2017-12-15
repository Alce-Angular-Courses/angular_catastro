import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container ">
    <article class="row alto mt-4">
      <header class="col-12 text-center">
        <h2>Inicio</h2>
      </header>
    </article>
  </div>
  `,
  styles: [
    '.alto {min-height: 20rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
