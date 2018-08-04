import { TestBed, inject } from '@angular/core/testing';

import { SaveUserDataService } from './save-user-data.service';

describe('SaveUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveUserDataService]
    });
  });

  it('should be created', inject([SaveUserDataService], (service: SaveUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
