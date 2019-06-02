import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw2Component } from './hw2.component';

describe('Hw2Component', () => {
  let component: Hw2Component;
  let fixture: ComponentFixture<Hw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
