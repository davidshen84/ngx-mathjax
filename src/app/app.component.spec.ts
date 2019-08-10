import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MathJaxModule } from './math-jax/math-jax.module';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { DummyComponent } from './dummy/dummy.component';
import { MarkdownModule } from 'ngx-markdown';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DemoComponent,
        DummyComponent
      ],
      imports: [
        FormsModule,
        MathJaxModule.forRoot(),
        MarkdownModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
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
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('div[mathjax]').length).toEqual(2);
  });
});
