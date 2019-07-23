import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerTreeComponent } from './tracker-tree.component';

describe('TrackerTreeComponent', () => {
  let component: TrackerTreeComponent;
  let fixture: ComponentFixture<TrackerTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
