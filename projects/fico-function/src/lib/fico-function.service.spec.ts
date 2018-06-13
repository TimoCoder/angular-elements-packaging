import { TestBed, inject } from '@angular/core/testing';

import { FicoFunctionService } from './fico-function.service';

describe('FicoFunctionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicoFunctionService]
    });
  });

  it('should be created', inject([FicoFunctionService], (service: FicoFunctionService) => {
    expect(service).toBeTruthy();
  }));
});
