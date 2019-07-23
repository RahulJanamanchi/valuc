import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDocumentHomeComponent } from './trace-document-home.component';

describe('TraceDocumentHomeComponent', () => {
  let component: TraceDocumentHomeComponent;
  let fixture: ComponentFixture<TraceDocumentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDocumentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDocumentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
