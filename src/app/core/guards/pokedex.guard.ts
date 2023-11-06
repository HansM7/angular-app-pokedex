import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';

export const pokedexGuard: CanActivateFn = (route, state) => {
  console.log('llegue aqui');
  const router = inject(Router);
  const userService = inject(UserService);

  const response = localStorage.getItem('user') as string;
  const user = JSON.parse(response);

  if (!user) {
    localStorage.clear();
    return router.createUrlTree(['/auth']);
  } else {
    // return userService.validateUser(user).pipe(
    //   map((data) => {
    //     return data;
    //   })
    // );
    // devolviendo true, no agregando mas validaciones porque da pereza xd
    return true;
  }
};
