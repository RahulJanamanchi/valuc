import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresHeaderComponent } from './stores-header.component';

describe('StoresHeaderComponent', () => {
  let component: StoresHeaderComponent;
  let fixture: ComponentFixture<StoresHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
