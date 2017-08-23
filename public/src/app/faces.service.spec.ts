import { TestBed, inject } from '@angular/core/testing';

import { FacesService } from './faces.service';

describe('FacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesService]
    });
  });

  it('should be created', inject([FacesService], (service: FacesService) => {
    expect(service).toBeTruthy();
  }));
});
