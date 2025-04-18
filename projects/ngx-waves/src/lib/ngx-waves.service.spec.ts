import { TestBed } from '@angular/core/testing';

import { NgxWavesService } from './ngx-waves.service';

describe('NgxWavesService', () => {
  let service: NgxWavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
