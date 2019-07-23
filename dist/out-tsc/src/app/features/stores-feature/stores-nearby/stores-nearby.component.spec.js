import { async, TestBed } from '@angular/core/testing';
import { StoresNearbyComponent } from './stores-nearby.component';
describe('StoresNearbyComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StoresNearbyComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StoresNearbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=stores-nearby.component.spec.js.map