import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerFeatureComponent } from './tracker-feature.component';

describe('TrackerFeatureComponent', () => {
  let component: TrackerFeatureComponent;
  let fixture: ComponentFixture<TrackerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
