import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { whiteboardActivateGuard } from './whiteboard-activate.guard';

describe('whiteboardActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => whiteboardActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
