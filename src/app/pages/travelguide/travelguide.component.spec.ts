import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideComponent } from './travelguide.component';

describe('TraveGuideComponent', () => {
  let component: TravelGuideComponent;
  let fixture: ComponentFixture<TravelGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
