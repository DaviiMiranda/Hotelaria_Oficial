
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/quartos")
    .then(response => response.json())
    .then(quartos => {
      const tabela = document.getElementById("tabela-quartos");

      quartos.forEach(quartos => {
       
        const linha = document.createElement("tr");

        linha.innerHTML = `
          <td>${quartos.numero}</td>
          <td>${quartos.tipo}</td>
          <td>${quartos.valor_diaria}</td>
          <td>${quartos.ocupado ? 'Sim' : 'Não'}</td>
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
