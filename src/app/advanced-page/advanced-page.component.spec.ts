import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedPageComponent } from './advanced-page.component';

describe('AdvancedPageComponent', () => {
  let component: AdvancedPageComponent;
  let fixture: ComponentFixture<AdvancedPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
