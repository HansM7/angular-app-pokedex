import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IPokemon } from 'src/app/core/models/interfaces/pokemon.interface';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent {
  user: IUser;
  id: string;
  pokemon: IPokemon = {} as IPokemon;
  isAttack: boolean = false;
  results: any = {
    isResults: false,
    response: false,
  };
  probabilities: boolean[] = [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private pokemonService: PokemonService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.pokemonService.getPokemon(this.id).subscribe((data) => {
      this.pokemon = data;
    });
    this.user = this.userService.existUser();
  }

  fleeBattle() {
    this.router.navigate(['/']);
  }

  show() {
    this.messageService.add({
      key: 'br',
      severity: this.results.response ? 'success' : 'error',
      summary: this.results.response ? 'Felicidades' : 'Lo sentimos',
      detail: this.results.response
        ? 'Pokemon capturado con exito'
        : 'El pokemon no fue capturado',
    });
  }

  attackBattle() {
    this.isAttack = true;
    const response =
      this.probabilities[Math.floor(Math.random() * this.probabilities.length)];
    if (response) {
      // registrar en la api
      this.addPokemonToPokedex();
    }
    setTimeout(() => {
      this.isAttack = false;
    }, 5000); // 5000 milisegundos = 5 segundos

    setTimeout(() => {
      this.results = { ...this.results, isResults: true, response };
    }, 5100);

    setTimeout(() => {
      this.show();
    }, 6000);
  }

  addPokemonToPokedex() {
    const body = {
      user_id: this.user.id,
      pokemon: {
        id: this.pokemon.id,
        name: this.pokemon.name,
      },
    };

    this.userService.registerPokemon(body)?.subscribe((data) => {});
  }
}
