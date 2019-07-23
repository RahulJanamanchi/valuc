import { async, TestBed } from '@angular/core/testing';
import { TraceDatesComponent } from './trace-dates.component';
describe('TraceDatesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceDatesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceDatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-dates.component.spec.js.map