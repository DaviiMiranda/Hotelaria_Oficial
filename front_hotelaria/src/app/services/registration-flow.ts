import { Injectable } from '@angular/core';
import { Guest } from './guest-service'; // Importe a interface Guest

@Injectable({
  providedIn: 'root'
})
export class RegistrationFlow {
   // Esta variável privada vai guardar os dados do hóspede.
  private guestData: Guest | null = null;

  constructor() { }

  // O RegisterComponent vai chamar este método para guardar os dados
  setGuestData(data: Guest) {
    this.guestData = data;
  }

  // O PaymentComponent vai chamar este método para recuperar os dados
  getGuestData(): Guest | null {
    return this.guestData;
  }

  // (Opcional) Método para limpar os dados após a finalização
  clearGuestData() {
    this.guestData = null;
  }
}
