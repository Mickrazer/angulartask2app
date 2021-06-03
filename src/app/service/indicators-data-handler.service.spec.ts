import { TestBed } from '@angular/core/testing';

import { IndicatirsDataHandlerService } from './indicatirs-data-handler.service';

describe('IndicatirsDataHandlerService', () => {
  let service: IndicatirsDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatirsDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
