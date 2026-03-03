import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationFlow } from '../../services/registration-flow';
import { RoomService, Room } from '../../services/room-service';
import { guestService, Guest } from '../../services/guest-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  registerForm: FormGroup;
  roomAvailable: boolean = false;
  availabilityMessage: string = '';
  isExistingGuest: boolean = false;
  cpfSearch: string = '';
  foundGuest: Guest | null = null;
  searchMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationFlow: RegistrationFlow,
    private roomService: RoomService,
    private guestSvc: guestService
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

  toggleExistingGuest(): void {
    this.isExistingGuest = !this.isExistingGuest;
    this.foundGuest = null;
    this.searchMessage = '';
    this.cpfSearch = '';
    if (!this.isExistingGuest) {
      this.registerForm.reset();
    }
  }

  searchByCpf(): void {
    if (!this.cpfSearch || this.cpfSearch.length !== 11) {
      this.searchMessage = 'Digite um CPF válido com 11 dígitos.';
      this.foundGuest = null;
      return;
    }

    this.guestSvc.getGuests().subscribe(guests => {
      const match = guests.find(g => g.cpf === this.cpfSearch);
      if (match) {
        this.foundGuest = match;
        this.searchMessage = '';
        // Auto-fill the form with the found guest data
        this.registerForm.patchValue({
          name: match.name,
          email: match.email,
          telephone: match.telephone,
          cpf: match.cpf
        });
      } else {
        this.foundGuest = null;
        this.searchMessage = 'Nenhum hóspede encontrado com esse CPF.';
      }
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
      this.registrationFlow.setGuestData(this.registerForm.value);
      this.router.navigate(['/payment']);
    } else {
      console.error('Formulário inválido. Por favor, corrija os campos.');
    }
  }
}