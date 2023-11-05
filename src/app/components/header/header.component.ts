import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  @Input() user: any;
  constructor(public router: Router, public userService: UserService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: this.user ? this.user.username : '',
        items: [
          {
            label: 'Pokedex',
            icon: 'pi pi-external-link',
            routerLink: '/pokedex',
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
