import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  items: MenuItem[] | undefined;
  user: IUser;
  pokemons: any;
  constructor(private userService: UserService, public router: Router) {
    this.user = this.userService.existUser();
    this.userService.getMyPokemons(this.user.id).subscribe((data) => {
      this.pokemons = data;
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
