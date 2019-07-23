import { TestBed } from '@angular/core/testing';
import { ProductDetailsService } from './product-details.service';
describe('ProductDetailsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductDetailsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=product-details.service.spec.js.map