import { TestBed } from '@angular/core/testing';

import { EslintService } from './eslint.service';

describe('EslintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EslintService = TestBed.get(EslintService);
    expect(service).toBeTruthy();
  });
});
