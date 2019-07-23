import { async, TestBed } from '@angular/core/testing';
import { TrackingItemDetailsComponent } from './tracking-item-details.component';
describe('TrackingItemDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrackingItemDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrackingItemDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tracking-item-details.component.spec.js.map