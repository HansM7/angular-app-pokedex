import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
