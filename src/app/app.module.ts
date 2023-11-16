import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ServicioLibrosService } from './servicios/servicio-libros.service';

import { AppComponent } from './app.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { FiltroBusquedaComponent } from './componentes/filtro-busqueda/filtro-busqueda.component';
import { ListadoLibrosComponent } from './componentes/listado-libros/listado-libros.component';
import { AñosTotalPipe } from './pipe/años-total.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    FormularioLoginComponent,
    FiltroBusquedaComponent,
    ListadoLibrosComponent,
    AñosTotalPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioLibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
