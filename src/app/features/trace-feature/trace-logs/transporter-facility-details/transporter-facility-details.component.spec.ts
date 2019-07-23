import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterFacilityDetailsComponent } from './transporter-facility-details.component';

describe('TransporterFacilityDetailsComponent', () => {
  let component: TransporterFacilityDetailsComponent;
  let fixture: ComponentFixture<TransporterFacilityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporterFacilityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterFacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
