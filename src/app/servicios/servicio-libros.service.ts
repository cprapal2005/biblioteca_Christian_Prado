import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioLibrosService {

  private subjectFiltrado: Subject<Libro[]> = new Subject<Libro[]>();
  private libros: Libro[];

  constructor() {

    this.libros = [
      {id: 1,
        titulo: "El Quijote",
        autor: "Machado",
        editorial: "Sanitas",
        fechaPublicacion: new Date("1956-12-05")
      },
      {id: 2,
        titulo: "Shin-Chan",
        autor: "Juan Carlos",
        editorial: "Almunia",
        fechaPublicacion: new Date("2022-12-25")
      },
      {id: 3,
        titulo: "El Antiguo",
        autor: "Paz",
        editorial: "BBDD",
        fechaPublicacion: new Date("1756-12-05")
      },
    ];

  }

  getLibros() {

    return this.subjectFiltrado.asObservable();

  }

  setFiltro(filtro: string) {

    if (filtro.length === 0) {
      this.subjectFiltrado.next([]);
    } else {
      let librosFiltrados = this.libros.filter(
        libro => libro.titulo.toLowerCase().includes(filtro.toLowerCase())
      );
      this.subjectFiltrado.next([...librosFiltrados]);
    }
  }

}
