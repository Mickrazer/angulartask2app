import { TestBed } from '@angular/core/testing';

import { CircleDataHandlerService } from './circle-data-handler.service';

describe('CircleDataHandlerService', () => {
  let service: CircleDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
