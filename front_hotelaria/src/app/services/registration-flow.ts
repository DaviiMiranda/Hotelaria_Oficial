import { Injectable } from '@angular/core';

export interface RegistrationData {
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  checkInDate: String;
  checkOutDate: String;
  roomType: string;
  roomNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationFlow {
   // Esta variável privada vai guardar os dados do hóspede.
  private guestData: RegistrationData | null = null;

  constructor() { }

  // O RegisterComponent vai chamar este método para guardar os dados
  setGuestData(data: RegistrationData) {
    this.guestData = data;
  }

  // O PaymentComponent vai chamar este método para recuperar os dados
  getGuestData(): RegistrationData | null {
    return this.guestData;
  }

  // (Opcional) Método para limpar os dados após a finalização
  clearGuestData() {
    this.guestData = null;
  }
}