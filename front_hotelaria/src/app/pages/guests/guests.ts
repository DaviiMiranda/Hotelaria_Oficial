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

  private mockGuests: Guest[] = [
    { name: 'João Silva', cpf: '12345678901', email: 'joao.silva@email.com', telephone: '(11) 98765-4321', checkInDate: '2026-03-01', checkOutDate: '2026-03-05', roomType: 'plus', roomNumber: '201' },
    { name: 'Maria Oliveira', cpf: '98765432100', email: 'maria.oliveira@email.com', telephone: '(21) 91234-5678', checkInDate: '2026-02-28', checkOutDate: '2026-03-04', roomType: 'max', roomNumber: '305' },
    { name: 'Carlos Eduardo Santos', cpf: '45678912300', email: 'carlos.santos@email.com', telephone: '(31) 99876-5432', checkInDate: '2026-03-02', checkOutDate: '2026-03-10', roomType: 'presidential_suite', roomNumber: '501' },
    { name: 'Ana Beatriz Costa', cpf: '32165498700', email: 'ana.costa@email.com', telephone: '(41) 98765-1234', checkInDate: '2026-03-01', checkOutDate: '2026-03-03', roomType: 'normal', roomNumber: '102' },
    { name: 'Roberto Almeida', cpf: '65498732100', email: 'roberto.almeida@email.com', telephone: '(51) 97654-3210', checkInDate: '2026-02-25', checkOutDate: '2026-03-02', roomType: 'plus', roomNumber: '204' },
    { name: 'Fernanda Lima', cpf: '78912345600', email: 'fernanda.lima@email.com', telephone: '(61) 96543-2109', checkInDate: '2026-03-03', checkOutDate: '2026-03-07', roomType: 'max', roomNumber: '308' },
    { name: 'Pedro Henrique Souza', cpf: '11122233344', email: 'pedro.souza@email.com', telephone: '(71) 95432-1098', checkInDate: '2026-03-01', checkOutDate: '2026-03-06', roomType: 'normal', roomNumber: '105' },
    { name: 'Juliana Ferreira', cpf: '55566677788', email: 'juliana.ferreira@email.com', telephone: '(85) 94321-0987', checkInDate: '2026-02-27', checkOutDate: '2026-03-03', roomType: 'presidential_suite', roomNumber: '502' }
  ];

  constructor(private guestService: guestService) { }

  ngOnInit(): void {
    this.loadGuests();
  }

  loadGuests() {
    this.guestService.getGuests().subscribe({
      next: (data) => {
        this.guests = data.length > 0 ? data : this.mockGuests;
        console.log(data);
      },
      error: () => {
        this.guests = this.mockGuests;
      }
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
