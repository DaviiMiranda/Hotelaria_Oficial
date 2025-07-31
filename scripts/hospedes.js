
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/hospedes")
    .then(response => response.json())
    .then(hospedes => {
      const tabela = document.getElementById("tabela-hospedes");

      hospedes.forEach(hospede => {
       
        const linha = document.createElement("tr");

        linha.innerHTML = `
          <td>${hospede.nome}</td>
          <td>${hospede.cpf}</td>
          <td>${hospede.telefone}</td>
          <td>${hospede.email}</td>
          <td>${formatarData(hospede.data_checkin)}</td>
          <td>${formatarData(hospede.data_checkout)}</td>
          <td>${formatarData(hospede.nascimento)}</td>
          <td>${hospede.quarto}</td>
        `;

        tabela.appendChild(linha);
      });
    })
    .catch(erro => {
      console.error("Erro ao buscar hóspedes:", erro);
    });
});

function formatarData(dataISO) {
  if (!dataISO) return "";
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR");
}
