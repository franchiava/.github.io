import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

export const autGuardGuard: CanActivateFn = (route, state) => {
  console.log('paso por el guard');

const router = inject(Router)
const authService = inject(AuthService)


// return authService.isAuthenticated().pipe(
//   map((isAuth) => {
//   if (isAuth) return true;
//   return router.createUrlTree(['/auth/login'])  ;
  
// }
//   ))

return true

}