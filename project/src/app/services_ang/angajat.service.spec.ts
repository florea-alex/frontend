import { TestBed } from '@angular/core/testing';

import { AngajatService } from './angajat.service';

describe('AngajatService', () => {
  let service: AngajatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngajatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
