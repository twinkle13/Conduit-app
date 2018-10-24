import { TestBed } from '@angular/core/testing';

import { CurrentUserResolverService } from './current-user-resolver.service';

describe('CurrentUserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentUserResolverService = TestBed.get(CurrentUserResolverService);
    expect(service).toBeTruthy();
  });
});
