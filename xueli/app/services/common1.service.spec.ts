import { TestBed, inject } from '@angular/core/testing';

import { Common1Service } from './common1.service';

describe('Common1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Common1Service]
    });
  });

  it('should be created', inject([Common1Service], (service: Common1Service) => {
    expect(service).toBeTruthy();
  }));
});
