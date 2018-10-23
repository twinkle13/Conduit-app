import { TestBed } from '@angular/core/testing';

import { HomeAuthResolerService } from './home-auth-resoler.service';

describe('HomeAuthResolerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAuthResolerService = TestBed.get(HomeAuthResolerService);
    expect(service).toBeTruthy();
  });
});
