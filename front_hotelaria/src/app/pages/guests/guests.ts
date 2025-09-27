import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guests',
  imports: [CommonModule],
  templateUrl: './guests.html',
  styleUrl: './guests.css'
})
export class Guests {
  guests = [
    { name: 'John Doe', cpf: '12345678901', room: '101' },
    { name: 'Jane Smith', cpf: '12345678902', room: '102' },
    { name: 'Peter Jones', cpf: '12345678903', room: '103' },
  ];
}