import { async, TestBed } from '@angular/core/testing';
import { GroupButtonComponent } from './group-button.component';
describe('GroupButtonComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GroupButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GroupButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=group-button.component.spec.js.map