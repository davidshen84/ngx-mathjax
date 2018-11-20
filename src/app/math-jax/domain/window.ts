import {Observable} from 'rxjs';

// noinspection TsLint
/**
 * Define MathJax related properties on the {Window} class.
 */
export class _Window extends Window {
  public mathJaxHub$: Observable<any>;
}
