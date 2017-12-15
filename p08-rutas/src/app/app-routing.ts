import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AutoresComponent } from './autores/autores.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'inicio', component: MainComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/:name', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);
