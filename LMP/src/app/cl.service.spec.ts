import { TestBed, inject } from '@angular/core/testing';

import { ClService } from './cl.service';

describe('ClService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClService]
    });
  });

  it('should be created', inject([ClService], (service: ClService) => {
    expect(service).toBeTruthy();
  }));
});
