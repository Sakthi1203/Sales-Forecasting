import { TestBed } from '@angular/core/testing';

import { ReturndataService } from './returndata.service';

describe('ReturndataService', () => {
  let service: ReturndataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturndataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
