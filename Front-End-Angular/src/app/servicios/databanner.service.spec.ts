import { TestBed } from '@angular/core/testing';

import { DatabannerService } from './databanner.service';

describe('DatabannerService', () => {
  let service: DatabannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
