import { async, TestBed } from '@angular/core/testing';
import { MultipleSupplierComponent } from './multiple-supplier.component';
describe('MultipleSupplierComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MultipleSupplierComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MultipleSupplierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multiple-supplier.component.spec.js.map