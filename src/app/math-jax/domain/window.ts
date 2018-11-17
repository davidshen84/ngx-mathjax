import {BehaviorSubject} from 'rxjs';

// noinspection TsLint
/**
 * Define MathJax related properties on the {Window} class.
 */
export class _Window extends Window {
  public mathJaxHubSubject: BehaviorSubject<MathJax.Hub>;
}
