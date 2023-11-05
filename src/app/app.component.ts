import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  APIResponse,
  Result,
  pokInArray,
} from './core/models/interfaces/pokeapi.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app-pokedex';
  pokemons!: pokInArray[];
  url!: any;

  constructor(public pokemonService: PokemonService) {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }
}
