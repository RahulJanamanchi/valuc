import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDocumentVideosComponent } from './trace-document-videos.component';

describe('TraceDocumentVideosComponent', () => {
  let component: TraceDocumentVideosComponent;
  let fixture: ComponentFixture<TraceDocumentVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDocumentVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDocumentVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
