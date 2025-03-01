import { TestBed } from '@angular/core/testing';

import { LtfDesignSystemService } from './ltf-design-system.service';

describe('LtfDesignSystemService', () => {
  let service: LtfDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtfDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
