import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomService } from '../../services/room-service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms {
  Rooms: Room[] = [];

  private mockRooms: Room[] = [
    { id: '1', number: '101', type: 'Normal', price: 150.00, available: true },
    { id: '2', number: '102', type: 'Normal', price: 150.00, available: false },
    { id: '3', number: '105', type: 'Normal', price: 150.00, available: false },
    { id: '4', number: '201', type: 'Plus', price: 250.00, available: false },
    { id: '5', number: '202', type: 'Plus', price: 250.00, available: true },
    { id: '6', number: '204', type: 'Plus', price: 250.00, available: false },
    { id: '7', number: '305', type: 'Max', price: 400.00, available: false },
    { id: '8', number: '308', type: 'Max', price: 400.00, available: false },
    { id: '9', number: '401', type: 'Max', price: 400.00, available: true },
    { id: '10', number: '501', type: 'Suíte Presidencial', price: 900.00, available: false },
    { id: '11', number: '502', type: 'Suíte Presidencial', price: 900.00, available: false }
  ];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getRooms().subscribe({
      next: (data) => {
        this.Rooms = data.length > 0 ? data : this.mockRooms;
        console.log(data);
      },
      error: () => {
        this.Rooms = this.mockRooms;
      }
    });
  }

  addRoom(newRoom: Room) {
    this.roomService.addRoom(newRoom).subscribe(() => {
      this.loadRooms();
    });
  }

  deleteGuest(Id: string) {
    this.roomService.deleteRoom(Id).subscribe(() => {
      this.loadRooms();
    });
  }
}