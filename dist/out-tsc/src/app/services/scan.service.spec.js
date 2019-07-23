import { TestBed } from '@angular/core/testing';
import { ScanService } from './scan.service';
describe('ScanService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ScanService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=scan.service.spec.js.map