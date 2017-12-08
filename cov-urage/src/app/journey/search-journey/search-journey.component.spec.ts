import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJourneyComponent } from './search-journey.component';

describe('SearchJourneyComponent', () => {
  let component: SearchJourneyComponent;
  let fixture: ComponentFixture<SearchJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
