import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';

export const authsInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Inyección del servicio

  const methodsWithToken = ['POST', 'PUT', 'DELETE'];

  if (methodsWithToken.includes(req.method.toUpperCase())) {
    const token = authService.getToken();

    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedReq);
    }
  }

  return next(req);
};
