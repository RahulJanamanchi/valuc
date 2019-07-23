import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessunitDetailsComponent } from './businessunit-details.component';

describe('BusinessunitDetailsComponent', () => {
  let component: BusinessunitDetailsComponent;
  let fixture: ComponentFixture<BusinessunitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessunitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessunitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
