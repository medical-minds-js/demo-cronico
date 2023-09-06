import { TestBed } from '@angular/core/testing';

import { OpenPayService } from './open-pay.service';

describe('OpenPayService', () => {
  let service: OpenPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
