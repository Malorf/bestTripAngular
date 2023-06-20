import { TestBed } from '@angular/core/testing';

import { AirTransportService } from './air-transport.service';

describe('AirTransportService', () => {
  let service: AirTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
