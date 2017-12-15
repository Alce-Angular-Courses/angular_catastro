import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutorsComponent } from './autores/autors.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './catalogo/details/details.component';
import { AuthGuard } from './services/guard.service';

const routes: Routes = [
    { path: 'inicio', component: MainComponent, canActivate: [AuthGuard] },
    // { path: 'books', component: BookListComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'book/:id', component: DetailsComponent },
    { path: 'autores', component: AutorsComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'about', component: AboutComponent },
    // rutas "manualmente" invocadas desde el navegador
    { path: 'saludo', component: AboutComponent },
    { path: 'saludo/:amigo', component: AboutComponent },
    // valor por defecto si no se incica ninguna ruta
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    // valor si se indica cualquier ruta distinta de las anteriores
    { path: '**', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);



