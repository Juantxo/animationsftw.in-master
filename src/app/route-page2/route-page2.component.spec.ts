import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoutePage2Component } from './route-page2.component';

describe('RoutePage2Component', () => {
  let component: RoutePage2Component;
  let fixture: ComponentFixture<RoutePage2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
