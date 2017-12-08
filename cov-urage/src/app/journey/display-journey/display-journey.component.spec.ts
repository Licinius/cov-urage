import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJourneyComponent } from './display-journey.component';

describe('DisplayJourneyComponent', () => {
  let component: DisplayJourneyComponent;
  let fixture: ComponentFixture<DisplayJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
