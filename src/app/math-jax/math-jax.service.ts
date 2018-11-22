import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * A internal utility service.
 */
@Injectable()
export class MathJaxService {

  /**
   * Signals when the MathJax object is ready.
   */
  public readonly MathJaxHub$ = new ReplaySubject<any>();

}
