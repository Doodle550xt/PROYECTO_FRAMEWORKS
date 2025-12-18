import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject, Inject } from '@angular/core';
import { noop } from 'rxjs';

export const protectedRoutesGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);
  const isLogged = authService.isLogin()
  if (!isLogged) {
    router.navigate(['/signin']);   
    return false;
  }
  return isLogged
};
