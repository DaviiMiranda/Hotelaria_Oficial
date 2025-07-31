import { calcularDiasHospedagem, calcularIdade } from "functions.js";
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form1');
  const mensagem = document.createElement('p');
  mensagem.id = 'mensagem';
  form.appendChild(mensagem); // Adiciona a mensagem no final do formulário
  
  form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const data_checkin = document.getElementById('data_checkin').value;
    const data_checkout = document.getElementById('data_checkout').value;
    const nascimento = document.getElementById('nascimento').value;
    const quarto = document.getElementById('quarto').value;

    // Limpar mensagem anterior
    mensagem.textContent = '';
    mensagem.style.color = 'red';

    //calculos
    

    // Validações
    
    // Envio dos dados
    try {
      
      const response = await fetch('http://localhost:3000/hospedes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          cpf,
          telefone,
          email,
          data_checkin,
          data_checkout,
          nascimento, 
          quarto
          
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao cadastrar hóspede');
      }

      mensagem.textContent = 'Hóspede cadastrado com sucesso!';
      mensagem.style.color = 'green';
      form.reset();

    } catch (error) {
      mensagem.textContent = error.message;
      mensagem.style.color = 'red';
    }
  });
});