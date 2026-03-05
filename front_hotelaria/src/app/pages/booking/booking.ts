import { Component, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface RoomOption {
  name: string;
  size: string;
  pricePerNight: number;
  image: string;
  internet: string;
  bathrooms: string;
  roomService: string;
  capacity: string;
  bed: string;
}

@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements OnInit {
  // Query params from booking bar
  checkIn = signal('');
  checkOut = signal('');
  adults = signal(1);
  kids = signal(0);

  // Guest info
  firstName = signal('');
  lastName = signal('');
  email = signal('');
  phone = signal('');
  specialRequests = signal('');

  // Room selection
  selectedRoomIndex = signal(0);

  rooms: RoomOption[] = [
    {
      name: 'Standard', size: '28 m²', pricePerNight: 350, image: 'assets/rooms/standard_bedroom.png',
      internet: 'Free Wi-Fi (50 Mbps)', bathrooms: '1 Bathroom', roomService: 'Available 8AM-10PM',
      capacity: 'Up to 2 Guests', bed: '1 Queen Bed'
    },
    {
      name: 'Deluxe', size: '42 m²', pricePerNight: 580, image: 'assets/rooms/deluxe_bedroom.png',
      internet: 'Fast Wi-Fi (150 Mbps)', bathrooms: '1 Spacious Bathroom', roomService: '24/7 Room Service',
      capacity: 'Up to 3 Guests', bed: '1 King Bed'
    },
    {
      name: 'Suites', size: '64 m²', pricePerNight: 950, image: 'assets/rooms/suite_bedroom.png',
      internet: 'Premium Wi-Fi (300 Mbps)', bathrooms: '2 Bathrooms + Jacuzzi', roomService: 'VIP 24/7 Service',
      capacity: 'Up to 4 Guests', bed: '1 King Bed + 1 Sofa Bed'
    },
  ];

  selectedRoom = computed(() => this.rooms[this.selectedRoomIndex()]);

  numberOfNights = computed(() => {
    const ci = this.checkIn();
    const co = this.checkOut();
    if (!ci || !co) return 1;
    const parse = (s: string) => {
      const [m, d, y] = s.split('/').map(Number);
      return new Date(y, m - 1, d);
    };
    const diff = parse(co).getTime() - parse(ci).getTime();
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 1;
  });

  roomTotal = computed(() => this.selectedRoom().pricePerNight * this.numberOfNights());

  taxesAndFees = computed(() => Math.round(this.roomTotal() * 0.15));

  grandTotal = computed(() => this.roomTotal() + this.taxesAndFees());

  formattedPrice(value: number): string {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['checkIn']) this.checkIn.set(params['checkIn']);
      if (params['checkOut']) this.checkOut.set(params['checkOut']);
      if (params['adults']) this.adults.set(+params['adults']);
      if (params['kids']) this.kids.set(+params['kids']);
    });
  }

  selectRoom(index: number) {
    this.selectedRoomIndex.set(index);
  }

  isFormValid(): boolean {
    return this.firstName().trim() !== '' &&
      this.lastName().trim() !== '' &&
      this.email().trim() !== '' &&
      this.checkIn() !== '' &&
      this.checkOut() !== '';
  }

  confirmBooking() {
    if (!this.isFormValid()) return;
    // In a real app, this would call an API
    alert(`Booking confirmed!\n\nGuest: ${this.firstName()} ${this.lastName()}\nRoom: ${this.selectedRoom().name}\nCheck-in: ${this.checkIn()}\nCheck-out: ${this.checkOut()}\nTotal: ${this.formattedPrice(this.grandTotal())}`);
    this.router.navigate(['/']);
  }
}
