import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url } from '../environments/api';
import { Observable } from 'rxjs';
import {
  APIResponse,
  Result,
  pokInArray,
} from '../core/models/interfaces/pokeapi.interface';
import { IPokemon } from '../core/models/interfaces/pokemon.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  api_url: string = api_url;
  pokemons!: pokInArray[];

  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<pokInArray[]> {
    return this.http.get<APIResponse>(this.api_url).pipe(
      map((response: APIResponse) => {
        if (response) {
          return response.results.map((pokemon, index) => ({
            data: pokemon,
            id: index,
          }));
        }
        return [];
      })
    );
  }

  getPokemonApi(id: number): Observable<IPokemon> {
    return this.http
      .get<IPokemon>(this.api_url + '/' + id)
      .pipe(map((data) => data));
  }

  getImage(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.api_url}/${name}`);
  }

  public getPokemon(id: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.api_url}/${id}`);
  }
}
