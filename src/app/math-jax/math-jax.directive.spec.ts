import { MathJaxDirective } from './math-jax.directive';


describe('MathJaxDirective', () => {
  it('should create an instance', () => {
    const directive = new MathJaxDirective({nativeElement: {}});
    expect(directive).toBeTruthy();
  });
});
