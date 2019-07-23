import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingItemDetailsComponent } from './tracking-item-details.component';

describe('TrackingItemDetailsComponent', () => {
  let component: TrackingItemDetailsComponent;
  let fixture: ComponentFixture<TrackingItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
