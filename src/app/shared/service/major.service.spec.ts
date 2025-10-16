import { TestBed } from '@angular/core/testing';

import { Major } from './major.service';

describe('Major', () => {
  let service: Major;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Major);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
