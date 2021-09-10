import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicsPageComponent } from './basics-page.component';

describe('BasicsPageComponent', () => {
  let component: BasicsPageComponent;
  let fixture: ComponentFixture<BasicsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
