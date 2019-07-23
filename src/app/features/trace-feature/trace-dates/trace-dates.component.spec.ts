import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDatesComponent } from './trace-dates.component';

describe('TraceDatesComponent', () => {
  let component: TraceDatesComponent;
  let fixture: ComponentFixture<TraceDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
