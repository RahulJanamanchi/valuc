import { async, TestBed } from '@angular/core/testing';
import { MapsComponent } from './maps.component';
describe('MapsComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                MapsComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(function () {
        var fixture = TestBed.createComponent(MapsComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app'", async(function () {
        var fixture = TestBed.createComponent(MapsComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(function () {
        var fixture = TestBed.createComponent(MapsComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
//# sourceMappingURL=maps.component.spec.js.map