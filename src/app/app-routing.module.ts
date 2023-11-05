import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';
import { Error404Component } from './modules/404/404.component';
import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { pokedexGuard } from './core/guards/pokedex.guard';
import { authGuard } from './core/guards/auth.guard';
import { BattleModule } from './modules/battle/battle.module';
import { BattleComponent } from './modules/battle/battle.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    component: AuthComponent,
  },
  {
    path: 'pokedex',
    canActivate: [pokedexGuard],
    component: PokedexComponent,
  },
  {
    path: 'battle/:id',
    canActivate: [pokedexGuard],
    component: BattleComponent,
  },
  {
    path: 'battle',
    canActivate: [pokedexGuard],
    component: BattleComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
