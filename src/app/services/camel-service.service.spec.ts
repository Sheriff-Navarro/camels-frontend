import { TestBed, inject } from '@angular/core/testing';

import { CamelServiceService } from './camel-service.service';

describe('CamelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamelServiceService]
    });
  });

  it('should be created', inject([CamelServiceService], (service: CamelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
