import { async, TestBed } from '@angular/core/testing';
import { TransportEventDetailsComponent } from './transport-event-details.component';
describe('TransportEventDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TransportEventDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TransportEventDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=transport-event-details.component.spec.js.map