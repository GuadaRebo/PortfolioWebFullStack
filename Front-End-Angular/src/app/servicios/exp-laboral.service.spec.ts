import { TestBed } from '@angular/core/testing';

import { ExpLaboralService } from './exp-laboral.service';

describe('ExpLaboralService', () => {
  let service: ExpLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
