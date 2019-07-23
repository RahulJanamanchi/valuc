import { async, TestBed } from '@angular/core/testing';
import { TraceDocumentLandingComponent } from './trace-document-landing.component';
describe('TraceDocumentLandingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDocumentLandingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDocumentLandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-document-landing.component.spec.js.map