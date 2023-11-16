import { Component } from '@angular/core';
import { ServicioLibrosService } from 'src/app/servicios/servicio-libros.service';

@Component({
  selector: 'listado-libros',
  templateUrl: './listado-libros.component.html',
  styles: [
  ]
})
export class ListadoLibrosComponent {

  public constructor(private servicioLibro: ServicioLibrosService) {

  }

  getLibros() {

    this.servicioLibro.getLibros().subscribe(librosFiltrados => {return librosFiltrados});

  }

}
