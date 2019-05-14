import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Server2Component } from './server2.component';

describe('Server2Component', () => {
  let component: Server2Component;
  let fixture: ComponentFixture<Server2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Server2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Server2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
