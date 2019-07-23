import { async, TestBed } from '@angular/core/testing';
import { TraceDocumentImagesComponent } from './trace-document-images.component';
describe('TraceDocumentImagesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDocumentImagesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDocumentImagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-document-images.component.spec.js.map