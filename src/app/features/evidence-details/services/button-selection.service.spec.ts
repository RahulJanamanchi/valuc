import { TestBed } from '@angular/core/testing';

import { ButtonSelectionService } from './button-selection.service';

describe('ButtonSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonSelectionService = TestBed.get(ButtonSelectionService);
    expect(service).toBeTruthy();
  });
});
