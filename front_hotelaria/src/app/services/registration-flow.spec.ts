import { TestBed } from '@angular/core/testing';

import { RegistrationFlow } from './registration-flow';

describe('RegistrationFlow', () => {
  let service: RegistrationFlow;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationFlow);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
