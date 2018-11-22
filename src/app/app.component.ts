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
  texOriginal = 'E = mc^2';
  show = true;
}
