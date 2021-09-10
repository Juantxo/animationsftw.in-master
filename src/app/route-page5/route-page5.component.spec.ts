import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoutePage5Component } from './route-page5.component';

describe('RoutePage5Component', () => {
  let component: RoutePage5Component;
  let fixture: ComponentFixture<RoutePage5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
