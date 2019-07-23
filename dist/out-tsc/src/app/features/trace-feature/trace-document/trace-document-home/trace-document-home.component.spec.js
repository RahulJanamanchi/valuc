import { async, TestBed } from '@angular/core/testing';
import { TraceDocumentHomeComponent } from './trace-document-home.component';
describe('TraceDocumentHomeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDocumentHomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDocumentHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-document-home.component.spec.js.map