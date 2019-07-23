import { TestBed } from '@angular/core/testing';

import { GeoserviceService } from './geoservice.service';

describe('GeoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoserviceService = TestBed.get(GeoserviceService);
    expect(service).toBeTruthy();
  });
});

