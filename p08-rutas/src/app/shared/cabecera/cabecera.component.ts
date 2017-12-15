import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public sTitulo: string;
  sLogo: string;

  constructor() {
   }

  ngOnInit() {
    this.sTitulo = 'Módulos en Angular';
    this.sLogo = '../../assets/logo_angular.svg';
  }

}
