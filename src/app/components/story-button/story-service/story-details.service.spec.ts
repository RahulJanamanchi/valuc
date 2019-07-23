import { TestBed } from '@angular/core/testing';

import { StoryDetailsService } from './story-details.service';

describe('StoryDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryDetailsService = TestBed.get(StoryDetailsService);
    expect(service).toBeTruthy();
  });
});
