import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../servicios/libros-mock.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;
  sTitle: string;

  constructor(public librosMoc: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscarLibros() {
    this.aLibros =
      this.librosMoc.getLibros(this.sClave)
    this.sTitle = 'Libros sobre ' + this.sClave;
    this.sClave = '';
  }

  buscarLibrosAsync() {
    this.librosMoc.getLibrosAsync(this.sClave).
    then(
      (response: Array<string>) => {
        this.aLibros = response;
      }, // promesa resuelta
      (error) => {} // promesa es rechazada
    );
  }

}
