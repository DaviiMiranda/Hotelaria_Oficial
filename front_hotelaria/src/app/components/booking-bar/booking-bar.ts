import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-bar',
  imports: [FormsModule],
  templateUrl: './booking-bar.html',
  styleUrl: './booking-bar.css'
})
export class BookingBar {
  constructor(private router: Router) { }
  showDatePicker = signal(false);
  showGuestPicker = signal(false);

  checkIn = signal('');
  checkOut = signal('');
  adults = signal(1);
  kids = signal(0);

  // Calendar state
  currentMonth = signal(new Date().getMonth());
  currentYear = signal(new Date().getFullYear());
  selectingCheckOut = signal(false);

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  dateDisplay = computed(() => {
    const ci = this.checkIn();
    const co = this.checkOut();
    if (ci && co) return `${ci} — ${co}`;
    if (ci) return `${ci} — ...`;
    return 'Select dates';
  });

  guestDisplay = computed(() => {
    const a = this.adults();
    const k = this.kids();
    return `${a} Adult${a > 1 ? 's' : ''}, ${k} Kid${k !== 1 ? 's' : ''}`;
  });

  currentMonthName = computed(() => this.monthNames[this.currentMonth()]);

  calendarDays = computed(() => {
    const month = this.currentMonth();
    const year = this.currentYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }
    return days;
  });

  toggleDatePicker() {
    this.showDatePicker.update(v => !v);
    this.showGuestPicker.set(false);
  }

  toggleGuestPicker() {
    this.showGuestPicker.update(v => !v);
    this.showDatePicker.set(false);
  }

  prevMonth() {
    if (this.currentMonth() === 0) {
      this.currentMonth.set(11);
      this.currentYear.update(y => y - 1);
    } else {
      this.currentMonth.update(m => m - 1);
    }
  }

  nextMonth() {
    if (this.currentMonth() === 11) {
      this.currentMonth.set(0);
      this.currentYear.update(y => y + 1);
    } else {
      this.currentMonth.update(m => m + 1);
    }
  }

  selectDay(day: number | null) {
    if (!day) return;
    const m = (this.currentMonth() + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    const formatted = `${m}/${d}/${this.currentYear()}`;

    if (!this.selectingCheckOut()) {
      this.checkIn.set(formatted);
      this.checkOut.set('');
      this.selectingCheckOut.set(true);
    } else {
      this.checkOut.set(formatted);
      this.selectingCheckOut.set(false);
      this.showDatePicker.set(false);
    }
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const today = new Date();
    return day === today.getDate() &&
      this.currentMonth() === today.getMonth() &&
      this.currentYear() === today.getFullYear();
  }

  isPast(day: number | null): boolean {
    if (!day) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(this.currentYear(), this.currentMonth(), day);
    return date < today;
  }

  changeAdults(delta: number) {
    const v = this.adults() + delta;
    if (v >= 1 && v <= 10) this.adults.set(v);
  }

  changeKids(delta: number) {
    const v = this.kids() + delta;
    if (v >= 0 && v <= 10) this.kids.set(v);
  }

  goToBooking() {
    this.router.navigate(['/booking'], {
      queryParams: {
        checkIn: this.checkIn(),
        checkOut: this.checkOut(),
        adults: this.adults(),
        kids: this.kids()
      }
    });
  }
}
