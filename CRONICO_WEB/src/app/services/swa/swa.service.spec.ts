import { TestBed } from '@angular/core/testing';

import { SwaService } from './swa.service';

describe('SwaService', () => {
  let service: SwaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
