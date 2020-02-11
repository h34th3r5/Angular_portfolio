import { TestBed } from '@angular/core/testing';

import { StaticDesignService } from './static-design.service';

describe('StaticDesignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDesignService = TestBed.get(StaticDesignService);
    expect(service).toBeTruthy();
  });
});
