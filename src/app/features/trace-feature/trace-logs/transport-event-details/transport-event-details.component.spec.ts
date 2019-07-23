import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportEventDetailsComponent } from './transport-event-details.component';

describe('TransportEventDetailsComponent', () => {
  let component: TransportEventDetailsComponent;
  let fixture: ComponentFixture<TransportEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
