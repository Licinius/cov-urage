import { TestBed, inject } from '@angular/core/testing';

import { TrajetService } from './trajet.service';

describe('TrajetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrajetService]
    });
  });

  it('should be created', inject([TrajetService], (service: TrajetService) => {
    expect(service).toBeTruthy();
  }));
});
