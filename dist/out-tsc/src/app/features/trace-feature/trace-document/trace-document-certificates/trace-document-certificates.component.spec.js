import { async, TestBed } from '@angular/core/testing';
import { TraceDocumentCertificatesComponent } from './trace-document-certificates.component';
describe('TraceDocumentCertificatesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDocumentCertificatesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDocumentCertificatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-document-certificates.component.spec.js.map