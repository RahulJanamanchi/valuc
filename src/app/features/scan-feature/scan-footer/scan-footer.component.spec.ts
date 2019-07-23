import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanFooterComponent } from './scan-footer.component';

describe('ScanFooterComponent', () => {
  let component: ScanFooterComponent;
  let fixture: ComponentFixture<ScanFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
