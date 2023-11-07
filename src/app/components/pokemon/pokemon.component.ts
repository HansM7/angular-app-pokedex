import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/core/models/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  id: string;
  pokemon: IPokemon = {} as IPokemon;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public pokemonService: PokemonService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    if (isNaN(Number(this.id))) {
      this.router.navigate(['/']);
    } else {
    }
    this.pokemonService.getPokemonApi(parseInt(this.id)).subscribe((data) => {
      this.pokemon = data;
    });
  }

  ngOnInit() {}
}
