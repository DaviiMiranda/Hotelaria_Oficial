import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guestService, Guest } from '../../services/guest-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guests',
  imports: [CommonModule, FormsModule],
  templateUrl: './guests.html',
  styleUrl: './guests.css'
})
export class Guests {
  guests: Guest[] = [];

  constructor(private guestService: guestService) {}

  ngOnInit(): void {
    this.loadGuests();
  }

  loadGuests() {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
      console.log(data);
    });
  }

  addGuest(newGuest: Guest) {
    this.guestService.addGuest(newGuest).subscribe(() => {
      this.loadGuests();
    });
  }

  deleteGuest(guestId: number) {
    this.guestService.deleteGuest(guestId).subscribe(() => {
      this.loadGuests();
    });
  }
    
}
