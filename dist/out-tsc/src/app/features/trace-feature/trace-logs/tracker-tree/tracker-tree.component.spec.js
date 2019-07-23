import { async, TestBed } from '@angular/core/testing';
import { TrackerTreeComponent } from './tracker-tree.component';
describe('TrackerTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrackerTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrackerTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tracker-tree.component.spec.js.map