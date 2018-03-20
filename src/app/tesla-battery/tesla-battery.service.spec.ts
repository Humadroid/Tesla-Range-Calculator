import { TestBed, inject } from '@angular/core/testing';

import { TeslaBatteryService } from './tesla-battery.service';

describe('TeslaBatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeslaBatteryService]
    });
  });

  it('should be created', inject([TeslaBatteryService], (service: TeslaBatteryService) => {
    expect(service).toBeTruthy();
  }));
});
