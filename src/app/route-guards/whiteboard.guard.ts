import { CanActivateFn } from '@angular/router';
export const whiteboardGuard: CanActivateFn = (route, state) => {
  return true;
};
