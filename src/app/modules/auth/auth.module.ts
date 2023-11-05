import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
