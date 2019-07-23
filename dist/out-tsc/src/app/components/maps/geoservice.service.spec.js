import { TestBed } from '@angular/core/testing';
import { GeoserviceService } from './geoservice.service';
describe('GeoserviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GeoserviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=geoservice.service.spec.js.map