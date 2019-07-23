import { TestBed } from '@angular/core/testing';

import { GoogleResponseService } from './google-response.service';

describe('GoogleResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleResponseService = TestBed.get(GoogleResponseService);
    expect(service).toBeTruthy();
  });
});
