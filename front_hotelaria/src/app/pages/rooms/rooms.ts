import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms {
  rooms = [
    { number: '101', type: 'Normal', status: 'Occupied' },
    { number: '102', type: 'Plus', status: 'Available' },
    { number: '103', type: 'Max', status: 'Occupied' },
    { number: '201', type: 'Presidential Suite', status: 'Available' },
  ];
}