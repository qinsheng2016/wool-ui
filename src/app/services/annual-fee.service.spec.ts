import { TestBed } from '@angular/core/testing';

import { AnnualFeeService } from './annual-fee.service';

describe('AnnualFeeService', () => {
  let service: AnnualFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
