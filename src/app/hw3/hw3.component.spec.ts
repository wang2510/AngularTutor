import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw3Component } from './hw3.component';

describe('Hw3Component', () => {
  let component: Hw3Component;
  let fixture: ComponentFixture<Hw3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
