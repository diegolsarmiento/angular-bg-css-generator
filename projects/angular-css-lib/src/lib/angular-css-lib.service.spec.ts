import { TestBed } from '@angular/core/testing';

import { AngularCssLibService } from './angular-css-lib.service';

describe('AngularCssLibService', () => {
  let service: AngularCssLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCssLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
