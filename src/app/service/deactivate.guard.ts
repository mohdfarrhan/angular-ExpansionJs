import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(component && typeof (component as any).canDeactive == 'function') {
    return (component as any).canDeactive();
  }
  return true;
};
