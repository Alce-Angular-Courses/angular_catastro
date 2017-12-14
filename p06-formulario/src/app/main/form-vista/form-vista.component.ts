import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Printer, DepartamentosModel, Departamento } from '../../models/maestros.model';
import { DatosModel } from '../../models/datos.model';

@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css']
})
export class FormVistaComponent implements OnInit {

  @ViewChild('formPrinter') formulario: any;
  // Tipo basado en una clase
  aPrinters: Array<Printer>;
  oPrinter: Printer;
  // Tipo basado en un interface
  aDepartamentos: Array<DepartamentosModel>;
  oDepartamento: DepartamentosModel;

  oOrdenPrint: DatosModel;

  constructor() {
    this.aPrinters = [
      {id: 1, nombre: 'Cannon'},
      {id: 2, nombre: 'HP'},
      {id: 3, nombre: 'Lexmark'},
    ];

    this.aDepartamentos = [
      new Departamento(1, 'Marketing'),
      new Departamento(2, 'Ventas'),
      new Departamento(3, 'Sistemas')
    ];

    this.oOrdenPrint = {
      nombre: '',
      apellidos: '',
      telefono: '',
      impresora: {id: '', nombre: ''},
      isColor: false,
      isClaro: false,
      departamento: {id: '', nombre: ''}
    };
  }

  ngOnInit() {
    console.log(this.formulario);
  }

  enviar() {
    console.log('Datos enviados');
  }

  borrar() {
   this.formulario.reset();
   console.log('Datos borrados');
  }

}
