import { async, TestBed } from '@angular/core/testing';
import { HomeFooterComponent } from './home-footer.component';
describe('HomeFooterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HomeFooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home-footer.component.spec.js.map