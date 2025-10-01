import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomService } from '../../services/room-service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms  {
  Rooms: Room[] = [];

    constructor(private roomService: RoomService) {}

    ngOnInit(): void {
      this.loadRooms();
    }

    loadRooms() {
      this.roomService.getRooms().subscribe((data) => {
        this.Rooms = data;
        console.log(data);
      });
    }

    addRoom(newRoom: Room) {
      this.roomService.addRoom(newRoom).subscribe(() => {
        this.loadRooms();
      });
    }

    addGuest(newGuest: Room) {
      this.roomService.addRoom(newGuest).subscribe(() => {
        this.loadRooms();
      });
    }

    deleteGuest(Id: string) {
      this.roomService.deleteRoom(Id).subscribe(() => {
        this.loadRooms();
      });
    }
}