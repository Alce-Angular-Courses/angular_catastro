import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { ListaXtendComponent } from './lista-xtend/lista-xtend.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent,
    ListaV4Component,
    AcumuladorComponent,
    ListaXtendComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
