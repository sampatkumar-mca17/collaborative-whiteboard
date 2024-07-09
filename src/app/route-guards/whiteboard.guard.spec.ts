import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { whiteboardGuard } from './whiteboard.guard';

describe('whiteboardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => whiteboardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
