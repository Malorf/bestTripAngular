import { TestBed } from '@angular/core/testing';

import { MaritimeTransportService } from './maritime-transport.service';

describe('MaritimeTransportService', () => {
  let service: MaritimeTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaritimeTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
