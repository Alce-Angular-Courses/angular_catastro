import { NgModule } from '@angular/core';
// Modulos de Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { ListaGoogleComponent } from './lista-google/lista-google.component';
// Servicios
import { LibrosMockService } from '../servicios/libros-mock.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent,
    ListaGoogleComponent
  ],
  providers: [
    LibrosMockService
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
