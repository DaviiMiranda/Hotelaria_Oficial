import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { guestService } from '../../services/guest-service';
import { Router } from '@angular/router';
import { Payment } from "../payment/payment";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Payment],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private guestService: guestService, private router: Router) {
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
       this.guestService.Register(guestData).subscribe({
        // Callback para SUCESSO
        next: (response) => {
          console.log("Resposta do servidor:", response);

          // Ação de sucesso: mostre um alerta e redirecione para outra página
          alert('Hóspede registrado com sucesso!');
          this.router.navigate(['/guests']); // Ex: Redireciona para a lista de hóspedes
        },
        // Callback para ERRO
        error: (err) => {
          console.error('Erro ao registrar hóspede:', err);

          // Ação de erro: mostre um alerta para o usuário
          alert('Não foi possível registrar o hóspede. Tente novamente.');
        }
      });

    } else {
      // Se o formulário for inválido, mostramos um erro no console
      console.error('Formulário inválido. Por favor, corrija os campos.');
      // O ideal aqui seria marcar os campos inválidos em vermelho na tela
    }
  }
}