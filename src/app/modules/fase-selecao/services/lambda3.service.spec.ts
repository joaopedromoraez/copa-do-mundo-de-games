import { TestBed } from '@angular/core/testing';

import { Lambda3Service } from './lambda3.service';

describe('Lambda3Service', () => {
  let service: Lambda3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lambda3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
