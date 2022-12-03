import { TestBed } from '@angular/core/testing';

import { TruonghocService } from './truonghoc.service';

describe('TruonghocService', () => {
  let service: TruonghocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruonghocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
