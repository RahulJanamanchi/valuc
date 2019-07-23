import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPillComponent } from './button-pill.component';

describe('ButtonPillComponent', () => {
  let component: ButtonPillComponent;
  let fixture: ComponentFixture<ButtonPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
