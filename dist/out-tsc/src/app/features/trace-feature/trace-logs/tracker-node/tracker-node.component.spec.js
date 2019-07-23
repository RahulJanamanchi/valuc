import { async, TestBed } from '@angular/core/testing';
import { TrackerNodeComponent } from './tracker-node.component';
describe('TrackerNodeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrackerNodeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrackerNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tracker-node.component.spec.js.map