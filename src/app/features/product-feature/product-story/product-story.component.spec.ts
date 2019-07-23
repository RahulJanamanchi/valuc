import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoryComponent } from './product-story.component';

describe('ProductStoryComponent', () => {
  let component: ProductStoryComponent;
  let fixture: ComponentFixture<ProductStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
