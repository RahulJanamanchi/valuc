import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTreeComponent } from './conversion-tree.component';

describe('ConversionTreeComponent', () => {
  let component: ConversionTreeComponent;
  let fixture: ComponentFixture<ConversionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
