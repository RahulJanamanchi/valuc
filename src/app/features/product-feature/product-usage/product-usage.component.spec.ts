import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUsageComponent } from './product-usage.component';

describe('ProductUsageComponent', () => {
  let component: ProductUsageComponent;
  let fixture: ComponentFixture<ProductUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
