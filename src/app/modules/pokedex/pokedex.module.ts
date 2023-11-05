import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [PokedexComponent],
})
export class PokedexModule {}
