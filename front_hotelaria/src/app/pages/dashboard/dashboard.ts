import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { guestService, Guest } from '../../services/guest-service';
import { RoomService, Room } from '../../services/room-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  guests: Guest[] = [];
  rooms: Room[] = [];
  activeSection: 'guests' | 'rooms' | 'find' | 'edit' = 'guests';
  
  // Search state
  searchCpf: string = '';
  foundGuest: Guest | null = null;

  constructor(
    private guestService: guestService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    // ALWAYS start with mock data to ensure something is visible
    this.mockData();
    // Then try to fetch real data
    this.loadData();
  }

  mockData(): void {
    const mockGuests: Guest[] = [
      { name: 'Jack Torrance', cpf: '123.456.789-00', email: 'jack@overlook.com', telephone: '(11) 99999-0000', checkInDate: '2024-03-10', checkOutDate: '2024-03-15', roomType: 'Suite', roomNumber: '237' },
      { name: 'Wendy Torrance', cpf: '987.654.321-11', email: 'wendy@overlook.com', telephone: '(11) 98888-1111', checkInDate: '2024-03-10', checkOutDate: '2024-03-15', roomType: 'Suite', roomNumber: '237' },
      { name: 'Danny Torrance', cpf: '444.555.666-22', email: 'redrum@overlook.com', telephone: '(11) 97777-2222', checkInDate: '2024-03-10', checkOutDate: '2024-03-15', roomType: 'Suite', roomNumber: '237' },
      { name: 'Dick Hallorann', cpf: '555.444.333-88', email: 'cook@overlook.com', telephone: '(11) 96666-3333', checkInDate: '2024-03-12', checkOutDate: '2024-03-18', roomType: 'Deluxe', roomNumber: '105' }
    ];

    const mockRooms: Room[] = [
      { id: '1', number: '237', type: 'Suite Presidencial', price: 2500, available: false },
      { id: '2', number: '101', type: 'Normal', price: 450, available: true },
      { id: '3', number: '102', type: 'Plus', price: 650, available: true },
      { id: '4', number: '201', type: 'Max', price: 1200, available: false },
      { id: '5', number: '105', type: 'Deluxe', price: 950, available: false }
    ];

    this.guests = [...mockGuests];
    this.rooms = [...mockRooms];
  }

  loadData(): void {
    this.guestService.getGuests().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
           this.guests = data;
        }
      },
      error: (err) => console.log('Backend offline. Displaying mock guests.')
    });

    this.roomService.getRooms().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.rooms = data;
        }
      },
      error: (err) => console.log('Backend offline. Displaying mock rooms.')
    });
  }

  setActiveSection(section: 'guests' | 'rooms' | 'find' | 'edit'): void {
    this.activeSection = section;
    this.foundGuest = null;
  }

  findGuest(): void {
    if (!this.searchCpf) {
      alert('Por favor, digite um CPF.');
      return;
    }
    this.foundGuest = this.guests.find(g => g.cpf.includes(this.searchCpf)) || null;
    if (!this.foundGuest) {
      alert('Hóspede não encontrado com o CPF informado.');
    }
  }

  updateGuest(guest: Guest): void {
    alert(`Alterações salvas (Localmente) para: ${guest.name}`);
  }
}
