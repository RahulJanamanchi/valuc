import { async, TestBed } from '@angular/core/testing';
import { PlacesNearbyComponent } from './places-nearby.component';
describe('PlacesNearbyComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PlacesNearbyComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PlacesNearbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=places-nearby.component.spec.js.map