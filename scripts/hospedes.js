function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
function calcularDiasHospedagem(dataEntrada, dataSaida) {
  const entrada = new Date(dataEntrada);
  const saida = new Date(dataSaida);
  const diff = saida - entrada;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dias;
}
