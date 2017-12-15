import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CabeceraComponent,
    PieComponent,
    MenuComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    MenuComponent
  ]
})
export class SharedModule { }
