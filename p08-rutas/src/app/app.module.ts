import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { appRouting } from './app-routing';
import { AutoresModule } from './autores/autores.module';
import { NoticiasModule } from './noticias/noticias.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    MainModule,
    AutoresModule,
    NoticiasModule,
    CatalogoModule,
    AboutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
