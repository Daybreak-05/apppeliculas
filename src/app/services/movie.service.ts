import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPelicula {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string; 
  vote_average: number; //Puntuación de la película
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8ad5a11bc3046399ee8f0b88288d7a43&query=';

  constructor(private http: HttpClient) { }

  buscarPeliculas(query: string): Observable<{ results: IPelicula[] }> {
    return this.http.get<{ results: IPelicula[] }>(`${this.apiUrl}${query}`);
  }
}
