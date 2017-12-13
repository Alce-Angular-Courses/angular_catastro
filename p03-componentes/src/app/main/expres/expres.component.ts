import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expres',
  templateUrl: './expres.component.html',
  styleUrls: ['./expres.component.css']
})
export class ExpresComponent implements OnInit {
  sName: string;
  nValor: number;
  sSaludo: string;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
    this.nValor = 32;
    this.sSaludo = 'Buenos días';
  }

}
