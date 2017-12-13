import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent,
    ListaV4Component
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
