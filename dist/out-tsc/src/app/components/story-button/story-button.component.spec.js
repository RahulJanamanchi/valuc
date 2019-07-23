import { async, TestBed } from '@angular/core/testing';
import { StoryButtonComponent } from './story-button.component';
describe('StoryButtonComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StoryButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StoryButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=story-button.component.spec.js.map