import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(private userService: UserService) {
    this.userService.getMyPokemons(1).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
