import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioBusquedaService } from 'src/app/servicios/servicio-busqueda.service';
import { ServicioLibrosService } from 'src/app/servicios/servicio-libros.service';

@Component({
  selector: 'listado-libros',
  templateUrl: './listado-libros.component.html',
  styles: [
  ]
})
export class ListadoLibrosComponent implements OnInit {

  private observableBusqueda!: Observable<string>;
  private textoBusqueda: string = "";

  public constructor(private servicioLibro: ServicioLibrosService, private servicioBusqueda: ServicioBusquedaService) {

    

  }

  ngOnInit() {
    this.observableBusqueda.subscribe(value => this.textoBusqueda = value);
    
  }



}
