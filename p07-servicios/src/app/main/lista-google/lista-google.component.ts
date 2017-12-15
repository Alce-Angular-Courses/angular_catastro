import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../servicios/libros-mock.service';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-lista-google',
  templateUrl: './lista-google.component.html',
  styleUrls: ['./lista-google.component.css']
})
export class ListaGoogleComponent implements OnInit {

  sURLBase: string;
  aLibros: Array<string>;
  sClave: string;
  sTitle: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.sURLBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  buscarLibros() {
    this.aLibros = [];
    const url = this.sURLBase + this.sClave;
    this.http.get(url)
    .toPromise()
    .then(
      (response: any) => {
        console.log(response);
        // response = response.json()
        response.items.forEach(
          (elem) => {this.aLibros.push(elem.volumeInfo.title); }
        );
      }, // promesa resuelta
      (error) => {} // promesa es rechazada
    );
    }

  buscarLibrosRx() {
    this.aLibros = [];
    const url = this.sURLBase + this.sClave;
    this.http.get(url)
    // .map( (response: any) => response.json() )
    .map( (response: any) => response.items )
    .subscribe(
      (response: any) => {
        console.log(response);
        response.forEach(
          (elem) => {this.aLibros.push(elem.volumeInfo.title); }
        );
      }
    );
  }

}
