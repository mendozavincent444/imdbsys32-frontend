import { TestBed } from '@angular/core/testing';

import { FarmerStorageService} from './farmer-storage.service';

describe('FarmerStorageService', () => {
  let service: FarmerStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
