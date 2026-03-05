import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBar } from './booking-bar';

describe('BookingBar', () => {
  let component: BookingBar;
  let fixture: ComponentFixture<BookingBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
