import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw1Component } from './hw1.component';

describe('Hw1Component', () => {
  let component: Hw1Component;
  let fixture: ComponentFixture<Hw1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
