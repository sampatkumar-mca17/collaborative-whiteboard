import { CanDeactivateFn } from '@angular/router';
import { WhiteBoardComponent } from '../whiteboard/whiteboard-component/whiteboard.component';

export const whiteboardDeactivateGuard: CanDeactivateFn<unknown> = (component:WhiteBoardComponent, currentRoute, currentState, nextState) => {
  component.sharedService.setHasWhiteBoardLoaded(false);
  return true;
};
