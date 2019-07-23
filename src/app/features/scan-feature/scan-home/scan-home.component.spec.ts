import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanHomeComponent } from './scan-home.component';

describe('ScanHomeComponent', () => {
  let component: ScanHomeComponent;
  let fixture: ComponentFixture<ScanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
