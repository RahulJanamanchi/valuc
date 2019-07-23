import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDocumentImagesComponent } from './trace-document-images.component';

describe('TraceDocumentImagesComponent', () => {
  let component: TraceDocumentImagesComponent;
  let fixture: ComponentFixture<TraceDocumentImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceDocumentImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceDocumentImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
