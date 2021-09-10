import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewFeaturesPageComponent } from './new-features-page.component';

describe('NewFeaturesPageComponent', () => {
  let component: NewFeaturesPageComponent;
  let fixture: ComponentFixture<NewFeaturesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFeaturesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeaturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
