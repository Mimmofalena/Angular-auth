import { TestBed } from '@angular/core/testing';

import { ProfileGuardServiceService } from './profile-guard-service.service';

describe('ProfileGuardServiceService', () => {
  let service: ProfileGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
