import {Observable} from 'rxjs';

/* tslint:disable:class-name */
/**
 * Define MathJax related properties on the {Window} class.
 */
export class _Window extends Window {
  public mathJaxHub$: Observable<any>;
}
