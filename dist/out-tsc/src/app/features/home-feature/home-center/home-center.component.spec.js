import { async, TestBed } from '@angular/core/testing';
import { HomeCenterComponent } from './home-center.component';
describe('HomeCenterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HomeCenterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeCenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home-center.component.spec.js.map