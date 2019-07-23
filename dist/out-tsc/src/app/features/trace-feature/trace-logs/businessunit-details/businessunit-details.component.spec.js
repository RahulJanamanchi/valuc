import { async, TestBed } from '@angular/core/testing';
import { BusinessunitDetailsComponent } from './businessunit-details.component';
describe('BusinessunitDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BusinessunitDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BusinessunitDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=businessunit-details.component.spec.js.map