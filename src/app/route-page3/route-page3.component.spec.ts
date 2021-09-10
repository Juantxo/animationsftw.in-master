import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoutePage3Component } from './route-page3.component';

describe('RoutePage3Component', () => {
  let component: RoutePage3Component;
  let fixture: ComponentFixture<RoutePage3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
