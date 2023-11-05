import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPipe } from './login.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginPipe],
  exports: [LoginPipe],
})
export class PipesModule {}
