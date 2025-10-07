import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { guestService, Guest } from '../../services/guest-service';
import {RoomService,Room} from '../../services/room-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {
  paymentForm: FormGroup;
  roomType: string = '';
  roomPrice: number = 0;

  guests: Guest[] = [];
  rooms: Room[] = [];

  constructor(private fb: FormBuilder, private guestService: guestService, private roomService: RoomService, private router: Router) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardHolderName: ['', Validators.required],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  loadGuest(guestId: number) {
    this.guestService.getGuestById(guestId).subscribe((data) => {
      this.guests = [data];
      console.log(data);
    });
  }

  calculateRoomPrice(roomType: string) {
    this.roomService.getRooms().subscribe((rooms) => {
      const selectedRoom = rooms.find(room => room.type === roomType);
      if (selectedRoom) {
        this.roomPrice = selectedRoom.price;
      } else {
        this.roomPrice = 0;
      }
    return this.roomPrice;
    });
  }  


  confirmPayment() {
    if (this.paymentForm.valid) {
      // Aqui você pode adicionar a lógica para processar o pagamento
      alert('Pagamento confirmado com sucesso!');
      this.router.navigate(['/guests']); // Redireciona para a lista de hóspedes após o pagamento
    } else {
      console.error('Formulário de pagamento inválido. Por favor, corrija os campos.');
    }
  }


}
