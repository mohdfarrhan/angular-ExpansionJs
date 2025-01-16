import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchroleGuard } from './matchrole.guard';

describe('matchroleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchroleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
