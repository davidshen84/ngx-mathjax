import { TestBed } from '@angular/core/testing';

import { MathJaxService } from './math-jax.service';

describe('MathJaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathJaxService = TestBed.get(MathJaxService);
    expect(service).toBeTruthy();
  });
});
