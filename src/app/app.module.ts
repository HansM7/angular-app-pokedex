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

@NgModule({
  declarations: [AppComponent, CardsComponent, CardComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    PrimeNgModule,
    AppRoutingModule,
    AuthModule,
    BattleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
