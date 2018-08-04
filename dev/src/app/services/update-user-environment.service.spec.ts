import { TestBed, inject } from '@angular/core/testing';

import { UpdateUserEnvironmentService } from './update-user-environment.service';

describe('UpdateUserEnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateUserEnvironmentService]
    });
  });

  it('should be created', inject([UpdateUserEnvironmentService], (service: UpdateUserEnvironmentService) => {
    expect(service).toBeTruthy();
  }));
});
