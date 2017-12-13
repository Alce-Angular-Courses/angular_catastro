import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BindingComponent implements OnInit {

  sName: string;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }

  btnBorrar(oEv) {
    console.log(oEv);
    this.sName = '';
  }
}
