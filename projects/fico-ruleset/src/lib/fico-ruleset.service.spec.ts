import { TestBed, inject } from '@angular/core/testing';

import { FicoRulesetService } from './fico-ruleset.service';

describe('FicoRulesetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicoRulesetService]
    });
  });

  it('should be created', inject([FicoRulesetService], (service: FicoRulesetService) => {
    expect(service).toBeTruthy();
  }));
});
