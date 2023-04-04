import { TestBed } from '@angular/core/testing';

import { AddPlayerService } from './add-player.service';

describe('AddPlayerService', () => {
  let service: AddPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
