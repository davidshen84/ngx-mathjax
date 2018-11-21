import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MathJaxModule} from './math-jax/math-jax.module';
import {_Window} from './math-jax/domain/window';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        MathJaxModule.config()
      ],
      providers: [
        {
          provide: _Window, useValue: {
            document: {
              createElement: () => ({}),
              getElementsByTagName: () => [
                {
                  appendChild: () => null
                }
              ]
            }
          }
        }
      ]
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

  it('should render two elements with mathjax directive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('div[mathjax]').length).toEqual(2);
  });
});
