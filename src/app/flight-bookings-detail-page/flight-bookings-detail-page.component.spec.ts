import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingsDetailPageComponent } from './flight-bookings-detail-page.component';

describe('FlightBookingsDetailPageComponent', () => {
  let component: FlightBookingsDetailPageComponent;
  let fixture: ComponentFixture<FlightBookingsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBookingsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightBookingsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
