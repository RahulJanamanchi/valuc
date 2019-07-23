import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDocumentCertificatesComponent } from './trace-document-certificates.component';

describe('TraceDocumentCertificatesComponent', () => {
  let component: TraceDocumentCertificatesComponent;
  let fixture: ComponentFixture<TraceDocumentCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDocumentCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDocumentCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
