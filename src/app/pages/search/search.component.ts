import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MovieService, IPelicula } from '../../services/movie.service';
import { RatingPipe } from '../../pipes/rating.pipe'; 

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, RatingPipe], 
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  peliculas: IPelicula[] = [];
  buscando: boolean = false;

  constructor(private movieService: MovieService) { }

  buscar() {
    if (this.query.trim().length < 3) return;
    this.buscando = true;

    this.movieService.buscarPeliculas(this.query).subscribe(
      (data) => {
        this.peliculas = data.results || [];
        this.buscando = false;
      },
      (error) => {
        console.error('Error al buscar películas', error);
        this.buscando = false;
      }
    );
  }
}
