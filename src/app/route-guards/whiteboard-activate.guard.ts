import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FluidModelService } from '../core/fluid- model.service';

export const whiteboardActivateGuard: CanActivateFn = (route, state) => {

  return true;
};
