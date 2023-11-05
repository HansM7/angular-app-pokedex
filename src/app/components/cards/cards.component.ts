import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { pokInArray } from 'src/app/core/models/interfaces/pokeapi.interface';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  pokemons!: pokInArray[];
  url!: any;
  user: IUser;
  items: MenuItem[] | undefined;

  constructor(
    public pokemonService: PokemonService,
    public userService: UserService
  ) {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
    this.user = this.userService.existUser();

    this.userService.getMyPokemons(this.user.id).subscribe((response) => {
      console.log(response);

      this.pokemons.forEach((pokemon: any) => {
        const foundPokemon = response.find(
          (item: any) => item.pokemon.name === pokemon.data.name
        );

        if (foundPokemon) {
          pokemon.registered = true;
        } else {
          pokemon.registered = false;
        }
      });
      console.log(this.pokemons);
    });
  }

  ngOnInit(): void {
    this.items = [
      {
        label: this.user.username,
        items: [
          {
            label: 'Pokedex',
            icon: 'pi pi-external-link',
            routerLink: 'pokedex',
          },
          {
            label: 'Logout',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
}
