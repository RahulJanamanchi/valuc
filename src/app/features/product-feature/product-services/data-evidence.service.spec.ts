import { TestBed } from '@angular/core/testing';

import { DataEvidenceService } from './data-evidence.service';

describe('DataEvidenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataEvidenceService = TestBed.get(DataEvidenceService);
    expect(service).toBeTruthy();
  });
});
