import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [BattleComponent],
  providers: [MessageService],
})
export class BattleModule {}
