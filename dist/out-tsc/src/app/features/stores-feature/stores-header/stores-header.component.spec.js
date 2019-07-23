import { async, TestBed } from '@angular/core/testing';
import { StoresHeaderComponent } from './stores-header.component';
describe('StoresHeaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StoresHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StoresHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=stores-header.component.spec.js.map