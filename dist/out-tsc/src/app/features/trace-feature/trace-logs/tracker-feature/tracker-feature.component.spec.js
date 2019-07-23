import { async, TestBed } from '@angular/core/testing';
import { TrackerFeatureComponent } from './tracker-feature.component';
describe('TrackerFeatureComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrackerFeatureComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrackerFeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tracker-feature.component.spec.js.map