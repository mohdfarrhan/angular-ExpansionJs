import { CanActivateChildFn } from '@angular/router';

export const childActivateGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
