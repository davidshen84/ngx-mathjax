import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable()
export class MathJaxService {

  public readonly MathJaxHubSubject = new BehaviorSubject<MathJax.Hub>(undefined);
  public readonly MathJaxHub$ = this.MathJaxHubSubject.pipe(filter(_ => _ !== undefined));

  constructor() {
  }
}
