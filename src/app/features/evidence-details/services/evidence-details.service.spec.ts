import { TestBed } from '@angular/core/testing';

import { EvidenceDetailsService } from './evidence-details.service';

describe('EvidenceDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvidenceDetailsService = TestBed.get(EvidenceDetailsService);
    expect(service).toBeTruthy();
  });
});
