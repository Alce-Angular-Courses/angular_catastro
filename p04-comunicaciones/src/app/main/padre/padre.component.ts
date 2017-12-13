import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PadreComponent implements OnInit {

  sName: string;
  constructor() { }

  ngOnInit() {
    this.sName = '';
  }

  eventoRespuesta(oEv) {
    this.sName = oEv;
  }
}
