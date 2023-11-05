import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public userService: UserService,
    public router: Router
  ) {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
    this.user = this.userService.existUser();

    if (this.user) {
      this.userService.getMyPokemons(this.user.id).subscribe((response) => {
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
      });
    }
  }

  ngOnInit(): void {
    this.items = [
      {
        label: this.user ? this.user.username : '',
        items: [
          {
            label: 'Pokedex',
            icon: 'pi pi-external-link',
            routerLink: 'pokedex',
          },
          {
            label: 'Logout',
            icon: 'pi pi-upload',
            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/auth']);
  }
}
