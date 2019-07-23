import { async, TestBed } from '@angular/core/testing';
import { ProductNotFoundComponent } from './product-not-found.component';
describe('ProductNotFoundComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductNotFoundComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-not-found.component.spec.js.map