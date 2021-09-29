import { TestBed } from '@angular/core/testing';

import { ActchildGuard } from './actchild.guard';

describe('ActchildGuard', () => {
  let guard: ActchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
