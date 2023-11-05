import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth guard!');
  const router = inject(Router);

  const response = localStorage.getItem('user') as string;
  const user = JSON.parse(response);

  if (user) {
    console.log('exist');
    return router.createUrlTree(['/pokedex']);
  } else return true;
};
