import { async, TestBed } from '@angular/core/testing';
import { EnvironmentConfigComponent } from './environment-config.component';
describe('EnvironmentConfigComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EnvironmentConfigComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EnvironmentConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=environment-config.component.spec.js.map