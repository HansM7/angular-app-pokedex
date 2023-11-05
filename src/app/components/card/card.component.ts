import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any;

  constructor(private router: Router) {}

  attackPokemon() {
    this.router.navigate(['/battle/', this.data.id + 1]);
  }
}
