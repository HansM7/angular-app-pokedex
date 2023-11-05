import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'register',
    canActivate: [authGuard],
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
