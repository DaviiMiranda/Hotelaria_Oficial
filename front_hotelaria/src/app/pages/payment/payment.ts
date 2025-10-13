import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { guestService, Guest } from '../../services/guest-service';
import {RoomService,Room} from '../../services/room-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationFlow } from '../../services/registration-flow';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment implements OnInit{

  public guestData: Guest | null = null;
  paymentForm: FormGroup;
  roomType: string = '';
  roomPrice: number = 0;

  guests: Guest[] = [];
  rooms: Room[] = [];

  constructor(private fb: FormBuilder, private guestService: guestService, private roomService: RoomService, private router: Router, private registrationFlow: RegistrationFlow) {
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

   ngOnInit(): void {
    // Pega os dados do serviço compartilhado quando o componente é iniciado
    this.guestData = this.registrationFlow.getGuestData();

    // Medida de segurança: se não houver dados, o usuário provavelmente acessou a URL diretamente.
    // Então, o redirecionamos de volta para a página de registro.
    //if (!this.guestData) {
     // console.error("Nenhum dado de hóspede encontrado. Redirecionando para o registro.");
      //this.router.navigate(['/register']);
    //}
  }


}
