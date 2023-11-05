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
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // component: AuthComponent,
    // children: [
    //   {
    //     path: 'register',
    //     canActivate: [authGuard],
    //     component: RegisterComponent,
    //   },
    // ],
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
  // {
  //   path: 'battle',
  //   canActivate: [pokedexGuard],
  //   component: BattleComponent,
  // },
  // {
  //   path: '**',
  //   component: Error404Component,
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
