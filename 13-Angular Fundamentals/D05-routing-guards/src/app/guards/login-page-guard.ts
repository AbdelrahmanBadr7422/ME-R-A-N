import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginPageGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = localStorage.getItem('authToken');
  if (auth !== null) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};
