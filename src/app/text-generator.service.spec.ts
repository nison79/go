import { TestBed } from '@angular/core/testing';

import { TextGeneratorService } from './text-generator.service';

describe('TextGeneratorService', () => {
  let service: TextGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
