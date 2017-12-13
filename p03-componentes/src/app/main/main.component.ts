import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container alto">
      <div class="row">
        <div class="col">
            <app-binding></app-binding>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
            <app-expres></app-expres>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
            <app-local></app-local>
        </div>
      </div>
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
