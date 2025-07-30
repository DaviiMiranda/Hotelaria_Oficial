
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
    const quarto = document.getElementById('quarto').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const dataEntrada = document.getElementById('data_checkin').value;
    const dataSaida = document.getElementById('data_checkout').value;

    // Limpar mensagem anterior
    mensagem.textContent = '';
    mensagem.style.color = 'red';

    // Validações
    if (!nome || !nascimento || !dataEntrada || !dataSaida) {
      mensagem.textContent = 'Preencha todos os campos.';
      return;
    }

    if (new Date(nascimento) > new Date()) {
      mensagem.textContent = 'Data de nascimento inválida.';
      return;
    }

    if (new Date(dataEntrada) > new Date(dataSaida)) {
      mensagem.textContent = 'A data de entrada não pode ser maior que a de saída.';
      return;
    }

    // Envio dos dados
    try {
      
      const response = await fetch('http://localhost:3000/hospedes1', {
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


