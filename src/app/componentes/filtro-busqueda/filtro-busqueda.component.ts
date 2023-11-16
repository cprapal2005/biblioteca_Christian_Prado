import { Component } from '@angular/core';
import { ServicioLibrosService } from 'src/app/servicios/servicio-libros.service';

@Component({
  selector: 'filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styles: [
  ]
})
export class FiltroBusquedaComponent {


  constructor(private servicioLibro: ServicioLibrosService) {

  }


  enviarFiltrado(filtro: string) {

    this.servicioLibro.setFiltro(filtro);

  }

}
