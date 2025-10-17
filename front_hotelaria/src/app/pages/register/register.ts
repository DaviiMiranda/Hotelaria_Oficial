import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationFlow } from '../../services/registration-flow';
import { RoomService, Room } from '../../services/room-service'; // Import RoomService and Room

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit { // Implement OnInit
  registerForm: FormGroup;
  roomAvailable: boolean = false; // New property to track availability
  availabilityMessage: string = ''; // New property for messages

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationFlow: RegistrationFlow,
    private roomService: RoomService // Inject RoomService
  ) {
    this.registerForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      roomType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]]
    });
  }

  ngOnInit(): void {
    this.registerForm.get('roomType')?.valueChanges.subscribe(roomType => {
      this.checkRoomAvailability(roomType);
    });
  }

  checkRoomAvailability(roomType: string): void {
    if (!roomType) {
      this.roomAvailable = false;
      this.availabilityMessage = 'Please select a room type.';
      return;
    }

    this.roomService.getRooms().subscribe(rooms => {
      const availableRoom = rooms.find(room => room.type === roomType && room.available);
      if (availableRoom) {
        this.roomAvailable = true;
        this.availabilityMessage = `Room type '${roomType}' is available.`;
      } else {
        this.roomAvailable = false;
        this.availabilityMessage = `Room type '${roomType}' is currently unavailable.`;
      }
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const guestData = this.registerForm.value;
      console.log("guestData:", guestData);
        // 3. GUARDE OS DADOS NO SERVIÇO COMPARTILHADO
      this.registrationFlow.setGuestData(this.registerForm.value);
        // 4. NAVEGUE PARA A PÁGINA DE PAGAMENTO
      this.router.navigate(['/payment']); // Verifique se '/payment' é a sua rota correta
      

    } else {
      // Se o formulário for inválido, mostramos um erro no console
      console.error('Formulário inválido. Por favor, corrija os campos.');
      // O ideal aqui seria marcar os campos inválidos em vermelho na tela
    }
  }
}