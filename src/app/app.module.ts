import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { CardsComponent } from './components/cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { AuthModule } from './modules/auth/auth.module';
import { BattleModule } from './modules/battle/battle.module';
import { PokedexModule } from './modules/pokedex/pokedex.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, CardComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    // agregue porque el browseranimatuionmodule hacia conflicto con browsermodule
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    MenuModule,
    AvatarModule,
    AvatarGroupModule,
    // PrimeNgModule  -- supendi esto,
    AppRoutingModule,
    AuthModule,
    BattleModule,
    PokedexModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// funcionaba el problema era el guard
// soluciona al browser module, tener shared independientes por cada modulo
