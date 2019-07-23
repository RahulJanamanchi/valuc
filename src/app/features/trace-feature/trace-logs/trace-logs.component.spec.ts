import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceLogsComponent } from './trace-logs.component';

describe('TraceLogsComponent', () => {
  let component: TraceLogsComponent;
  let fixture: ComponentFixture<TraceLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
