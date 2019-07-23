import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSupplierComponent } from './multiple-supplier.component';

describe('MultipleSupplierComponent', () => {
  let component: MultipleSupplierComponent;
  let fixture: ComponentFixture<MultipleSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
