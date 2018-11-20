import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class MathJaxService {

  public readonly MathJaxHub$ = new ReplaySubject<any>();

  constructor() {
  }
}
