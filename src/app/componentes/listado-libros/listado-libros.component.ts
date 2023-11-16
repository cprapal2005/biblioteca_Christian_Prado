import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/interfaces/libro';
import { ServicioLibrosService } from 'src/app/servicios/servicio-libros.service';

@Component({
  selector: 'listado-libros',
  templateUrl: './listado-libros.component.html',
  styles: [
  ]
})
export class ListadoLibrosComponent implements OnInit {

  librosFiltrados$!: Observable<Libro[]>;

  constructor(private servicioLibro: ServicioLibrosService) {}

  ngOnInit() {
    this.librosFiltrados$ = this.servicioLibro.getLibros();
  }
}
