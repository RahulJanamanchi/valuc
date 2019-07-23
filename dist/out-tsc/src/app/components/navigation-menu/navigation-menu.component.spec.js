import { async, TestBed } from '@angular/core/testing';
import { NavigationMenuComponent } from './navigation-menu.component';
describe('NavigationMenuComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NavigationMenuComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NavigationMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=navigation-menu.component.spec.js.map