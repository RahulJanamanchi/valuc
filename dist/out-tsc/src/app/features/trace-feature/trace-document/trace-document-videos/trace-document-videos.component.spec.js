import { async, TestBed } from '@angular/core/testing';
import { TraceDocumentVideosComponent } from './trace-document-videos.component';
describe('TraceDocumentVideosComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDocumentVideosComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDocumentVideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-document-videos.component.spec.js.map