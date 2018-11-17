import {MathJaxDirective} from './math-jax.directive';
import {MathJaxService} from './math-jax.service';


describe('MathJaxDirective', () => {
  it('should create an instance', () => {
    const service = new MathJaxService();

    const directive = new MathJaxDirective({nativeElement: {}}, service);
    expect(directive).toBeTruthy();
  });
});
