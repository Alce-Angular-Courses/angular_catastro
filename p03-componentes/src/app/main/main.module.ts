import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { BindingComponent } from './binding/binding.component';
import { ExpresComponent } from './expres/expres.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    BindingComponent,
    ExpresComponent,
    LocalComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
