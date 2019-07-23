import { async, TestBed } from '@angular/core/testing';
import { ScanFooterComponent } from './scan-footer.component';
describe('ScanFooterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ScanFooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ScanFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=scan-footer.component.spec.js.map