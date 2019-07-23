import { async, TestBed } from '@angular/core/testing';
import { TransporterFacilityDetailsComponent } from './transporter-facility-details.component';
describe('TransporterFacilityDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TransporterFacilityDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TransporterFacilityDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=transporter-facility-details.component.spec.js.map