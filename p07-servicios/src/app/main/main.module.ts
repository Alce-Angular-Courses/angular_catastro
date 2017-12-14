import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { LibrosMockService } from '../servicios/libros-mock.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent
  ],
  providers: [
    LibrosMockService
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
