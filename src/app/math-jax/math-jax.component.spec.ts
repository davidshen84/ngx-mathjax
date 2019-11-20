import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathJaxComponent } from './math-jax.component';

describe('MathjaxComponent', () => {
  let component: MathJaxComponent;
  let fixture: ComponentFixture<MathJaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MathJaxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathJaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
