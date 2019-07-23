import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDocumentLandingComponent } from './trace-document-landing.component';

describe('TraceDocumentLandingComponent', () => {
  let component: TraceDocumentLandingComponent;
  let fixture: ComponentFixture<TraceDocumentLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDocumentLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDocumentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
