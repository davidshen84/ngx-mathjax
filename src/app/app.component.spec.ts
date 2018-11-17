import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MathJaxModule, ModuleConfiguration} from './math-jax/math-jax.module';
import {_Window} from './math-jax/domain/window';
import {MathJaxService} from './math-jax/math-jax.service';

describe('AppComponent', () => {
/*  const mockWindow = {
    document: {
      createElement: (...args: any[]) => ({}),
      getElementsByTagName: (n: string) => [
        {
          appendChild: () => {
          }
        }
      ]
    }
  };*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
/*      imports: [MathJaxModule],
      providers: [{provide: ModuleConfiguration, useValue: {version: '', config: ''}},
        {provide: _Window, useValue: mockWindow},
        {provide: MathJaxService, useValue: {}}]*/
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-mathjax'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-mathjax');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngx-mathjax!');
  });
});
