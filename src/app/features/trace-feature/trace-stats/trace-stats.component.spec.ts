import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceStatsComponent } from './trace-stats.component';

describe('TraceStatsComponent', () => {
  let component: TraceStatsComponent;
  let fixture: ComponentFixture<TraceStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
