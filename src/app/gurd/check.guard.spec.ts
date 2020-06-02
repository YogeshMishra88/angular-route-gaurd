import { TestBed, async, inject } from '@angular/core/testing';

import { CheckGuard } from './check.guard';

describe('CheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckGuard]
    });
  });

  it('should ...', inject([CheckGuard], (guard: CheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
