import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { HomeComponent } from './pages/home/home.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'busqueda/:nombre', component: BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
