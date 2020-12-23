import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ConvertUrlPipe } from './pipes/convert-url.pipe';
import { CardComponent } from './components/shared/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { CardImageComponent } from './components/shared/card-image/card-image.component';
import { PopularityPipe } from './pipes/popularity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent,
    PeliculaComponent,
    ConvertUrlPipe,
    CardComponent,
    CardImageComponent,
    PopularityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
