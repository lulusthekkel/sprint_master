import { TestBed } from '@angular/core/testing';

import { Sprintservice } from './sprintservice';

describe('Sprintservice', () => {
  let service: Sprintservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sprintservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
