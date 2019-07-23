import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresNearbyComponent } from './stores-nearby.component';

describe('StoresNearbyComponent', () => {
  let component: StoresNearbyComponent;
  let fixture: ComponentFixture<StoresNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
