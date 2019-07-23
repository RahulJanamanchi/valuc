import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGradesComponent } from './product-grades.component';

describe('ProductGradesComponent', () => {
  let component: ProductGradesComponent;
  let fixture: ComponentFixture<ProductGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
