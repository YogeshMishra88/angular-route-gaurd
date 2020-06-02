import { TestBed, async, inject } from '@angular/core/testing';

import { ChildauthGuard } from './childauth.guard';

describe('ChildauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildauthGuard]
    });
  });

  it('should ...', inject([ChildauthGuard], (guard: ChildauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
