import {Observable} from 'rxjs';

/* tslint:disable:class-name */
/**
 * Defines MathJax related properties on the **Window** class.
 */
export class _Window extends Window {
  /**
   * Observes when the MathJax object is ready.
   */
  public mathJaxHub$: Observable<any>;
}
