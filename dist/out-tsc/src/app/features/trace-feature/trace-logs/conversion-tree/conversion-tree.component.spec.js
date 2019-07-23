import { async, TestBed } from '@angular/core/testing';
import { ConversionTreeComponent } from './conversion-tree.component';
describe('ConversionTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConversionTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConversionTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=conversion-tree.component.spec.js.map