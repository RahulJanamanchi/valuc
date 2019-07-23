import { async, TestBed } from '@angular/core/testing';
import { TraceStatsComponent } from './trace-stats.component';
describe('TraceStatsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TraceStatsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TraceStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trace-stats.component.spec.js.map