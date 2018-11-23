import {Component} from '@angular/core';

/**
 * @ignore
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-mathjax';
  show = true;
  exp1 = 'E = mc^2';
  exp2 = 'x = 1';
}
