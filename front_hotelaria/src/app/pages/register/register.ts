import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from "../payment/payment";
import { RegistrationFlow } from '../../services/registration-flow';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registrationFlow: RegistrationFlow) {
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